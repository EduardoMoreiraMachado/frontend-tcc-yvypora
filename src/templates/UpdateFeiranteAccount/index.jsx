import "./style.css";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { Title } from "../../components/Title";
import { DefaultInput } from "../../components/DefaultInput";
import { SpecialInput } from "../../components/SpecialInput";
import { GreenButton } from "../../components/GreenButton";
import { AddImage } from "../../components/AddImage";

import { useState } from "react";
import { useEffect } from "react";

import { getDetails } from "../../utils/fetchs/common/user";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { updateMarketerAccount } from "../../utils/fetchs/Marketer/marketer";
import { appendPictureToUser } from "../../utils/fetchs/common/picture";

const MySwal = withReactContent(Swal);

export const UpdateFeiranteAccount = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-details"))
  );
  
  const [values, setValues] = useState({});

  useEffect(() => {
    const defaultsInputs = document.querySelectorAll(".default-input");
    const specialInputs = document.querySelectorAll(".special-input");

    defaultsInputs[0].value = user.name;
    defaultsInputs[1].value = user.email;

    specialInputs[0].value = user.cpf;

    if (user.phone) specialInputs[1].value = user.phone;
    if (user.tentName) defaultsInputs[3].value = user.tentName;

    let birthday = user.birthday.split("-");
    birthday = `${birthday[2]}/${birthday[1]}/${birthday[0]}`;

    specialInputs[2].value = birthday;
  }, []);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const { id } = JSON.parse(localStorage.getItem("user-details"));

    const defaultsInputs = document.querySelectorAll(".default-input");
    const specialInputs = document.querySelectorAll(".special-input");

    const name = defaultsInputs[0].value;
    const email = defaultsInputs[1].value;
    const password = defaultsInputs[2].value;
    const cpf = specialInputs[0].value;
    const phone = specialInputs[1].value;
    const birthday = specialInputs[2].value;

    const image = document.getElementById("file-selection").files[0];
    const formdata = new FormData();
    formdata.append("picture", image);

    let newBirthday = user.birthday.split("-");
    newBirthday = `${newBirthday[0]}/${newBirthday[1]}/${newBirthday[2]}`;
    newBirthday = newBirthday.replaceAll("/", "-");

    console.log(newBirthday);

    const marketer = {
      name,
      email,
      birthday: newBirthday,
      id,
    };

    if (cpf) marketer.cpf = cpf;
    if (password) marketer.password = password;

    try {
      await updateMarketerAccount(marketer);

      if (!image) {
        MySwal.fire({
          timer: 1500,
          showConfirmButton: false,
          title: <p>Perfil Atualizado</p>,
          icon: "success",
          buttonsStyling: false,
          timerProgressBar: true,
        });
        return null;
      }

      await appendPictureToUser(formdata);

      const updatedDetails = await getDetails();

      localStorage.setItem("user-details", JSON.stringify(updatedDetails));
      setUser(JSON.parse(localStorage.getItem("user-details")));

      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Perfil Atualizado</p>,
        icon: "success",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="update-feirante-account-container">
      <Header
        imgUrl={
          "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
        }
      />
      <div className="update-content">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="update-inputs">
          <Title text="Editar conta" />
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
          {/* <DefaultInput
                        name='Data de nascimento'
                        type='date'
                    /> */}
          <SpecialInput
            name="date"
            type="date"
            label="Data de nascimento"
            mask="99/99/9999"
            value={values.date}
            onChange={handleChange}
          />
        </div>

        <div className="green-button">
          <AddImage />
          <GreenButton text="Salvar" onClick={handleClick} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateFeiranteAccount;
