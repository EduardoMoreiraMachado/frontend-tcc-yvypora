import styles from './styles.module.css';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import { Title } from "../../components/Title";
import { DefaultInput } from "../../components/DefaultInput";
import { AddImage } from "../../components/AddImage";
import { GreenButton } from "../../components/GreenButton";
import { Footer } from "../../components/Footer";
import { SpecialInput } from "../../components/SpecialInput";

import { useState } from "react";
import { useEffect } from "react";
import { fetchMarketerFormFields } from "../../utils/fetchs/common/formFieldsFetch";
import { getLocation } from "../../utils/location";
import { singUpMarketer } from "../../utils/fetchs/Marketer/marketer";
import { appendPictureToUser } from "../../utils/fetchs/common/picture";
import { commonsAPI } from "../../api/api";

const MySwal = withReactContent(Swal);

export const SignUpFeirante = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [values, setValues] = useState({});
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fields = await fetchMarketerFormFields(location);
      console.log(fields);

      setGenders(fields.genders);
    };
    fetch().then();
  }, []);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    localStorage.setItem("location", JSON.stringify(location));
  }, []);

  const handleClick = async (e) => {
    const marketer = {
      name: String,
      cnpj: String,
      cpf: String,
      email: String,
      password: String,
      phone: String,
      birthday: String,
      location: {
        longitude: Number,
        latitude: Number,
      },
      gender: String,
    };
    e.preventDefault();

    const gender = document.querySelector(
      'input[name="radio-20"]:checked'
    ).value;

    const defaultInputs = document.querySelectorAll(".default-input");
    const specialInputs = document.querySelectorAll(".special-input");

    marketer.gender = gender.toUpperCase();
    marketer.name = defaultInputs[0].value;
    marketer.email = defaultInputs[1].value;
    marketer.password = defaultInputs[2].value;
    marketer.cpf = specialInputs[0].value;
    marketer.phone = specialInputs[1].value.replace(/\D/g, "");
    marketer.tent_name = defaultInputs[3].value;
    marketer.birthday = defaultInputs[4].value;

    marketer.location.latitude = location.latitude;
    marketer.location.longitude = location.longitude;

    const image = document.getElementById("file-selection").files[0];
    const formdata = new FormData();

    formdata.append("picture", image);

    try {
      const res = await singUpMarketer(marketer);

      const { data } = await commonsAPI.post("/login/", {
        email: res.email,
        password: marketer.password,
      });

      localStorage.setItem("user-logged-token", data.token);

      await appendPictureToUser(formdata);

      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Seja Bem Vindo!</p>,
        icon: "success",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main-cadastro">
      <header>
        <div className="header-icon">
          <img className="icon-yvy" src={YvyporaTextIcon} alt="" />
        </div>
      </header>
      <Title text="Cadastre-se" />
      <div className="input-container">
        <div className="inputs">
          <DefaultInput name="Nome" type="text" />
          <DefaultInput name="Email" type="email" />
          <DefaultInput name="Senha" type="password" />
          <SpecialInput
            name="cpf"
            label="CPF"
            mask="999.999.999-99"
            value={values.cpf}
            onChange={handleChange}
          />
          <SpecialInput
            name="phone"
            label="Telefone"
            mask="(999) 9 9999-9999"
            value={values.phone}
            onChange={handleChange}
          />
          <DefaultInput name="Nome do estabelecimento" type="text" />
          <DefaultInput name="Data de nascimento" type="date" />
          <div className="genders">
            {genders.map(({ name, id }) => (
              <label className="label cursor-pointer">
                <span className="label-text">{name}</span>
                <input
                  value={name}
                  type="radio"
                  name="radio-20"
                  className="radio checked:bg-green-900"
                />
              </label>
            ))}
          </div>
        </div>
        <div className="button-add-image-container">
          <AddImage text="Adicione uma foto de perfil" />
          <GreenButton text="Cadastrar" onClick={handleClick} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUpFeirante;
