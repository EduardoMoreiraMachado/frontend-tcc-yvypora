import styles from "./styles.module.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import { Footer } from "../../components/Footer";
import { DefaultInput } from "../../components/DefaultInput";
import { GreenButton } from "../../components/GreenButton";
import { SpecialInput } from "../../components/SpecialInput";
import { Title } from "../../components/Title";
import { AddImage } from "../../components/AddImage";
import { commonsAPI } from "../../api/api";
import { useEffect, useState } from "react";
import { singUpCostumer } from "../../utils/fetchs/Costumer/costumer";
import { cepAPI } from "../../api/api";
import { fetchCostumerFormFields } from "../../utils/fetchs/common/formFieldsFetch";
import { appendPictureToUser } from "../../utils/fetchs/common/picture";

const MySwal = withReactContent(Swal);

export const SignUpConsumidor = () => {
  const [values, setValues] = useState({});
  const [genders, setGenders] = useState([]);
  const [addressTypes, setAddressType] = useState([]);
  
  const [formData, setFormData] = useState({
    Nome: "",
    Email: "",
    Senha: "",
    "Data de nascimento": "",
    "Nome do estabelecimento": "",
    cpf: '',
    cep: ''
  });

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const  handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    handleChangeFields(event)
  }

  useEffect(() => {
    const fetch = async () => {
      const fields = await fetchCostumerFormFields();
      setGenders(fields.genders);
      setAddressType(fields.typesOfAddress);
    };

    fetch().catch();
  }, []);

  const handleClick = async (e) => {
    console.log(formData);
    e.preventDefault();
    const costumer = {
      name: String,
      email: String,
      password: String,
      cpf: String,
      address: {
        cep: String,
        uf: String,
        city: String,
        neighborhood: String,
        logradouro: String,
        number: Number,
        complemento: String,
        addressTypeId: Number,
      },
      birthday: String,
      gender: String,
    };

    const { cep, cpf, Email, Nome, Senha } = formData;
    const birthday = formData['Data de nascimento']
    
    const gender = document.querySelector(
      'input[name="radio-20"]:checked'
    ).value;
    const typeOfAddress = document.querySelector(
      'input[name="typeAddress"]:checked'
    ).value;
    
    costumer.name = Nome;
    costumer.email = Email;
    costumer.password = Senha;
    costumer.cpf = cpf;
    costumer.cep = cep;
    costumer.gender = gender[0].toUpperCase(); // add to input
    costumer.birthday = birthday;

    const { data } = await cepAPI.get(`${cep}/json/`);

    costumer.address.cep = cep;
    costumer.address.city = data.localidade;
    costumer.address.uf = data.uf;
    costumer.address.logradouro = data.logradouro;
    costumer.address.number = 146; // add to input
    costumer.address.neighborhood = data.bairro;
    costumer.address.complemento = ""; // add to input
    costumer.address.addressTypeId = typeOfAddress; // add to input

    try {
      const res = await singUpCostumer(costumer);

      const { data } = await commonsAPI.post("/login/", {
        email: res.email,
        password: costumer.password,
      });

      localStorage.setItem("user-logged-token", data.token);

      // append image
      const image = document.getElementById("file-selection").files[0];
      const formdata = new FormData();

      formdata.append("picture", image);

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

      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Erro no Cadastro!</p>,
        icon: "error",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className={styles["main-cadastro"]}>
      <header>
        <div className={styles["header-icon"]}>
          <img className={styles["icon-yvy"]} src={YvyporaTextIcon} alt="" />
        </div>
      </header>
      <Title text="Cadastre-se" />
      <div className={styles["input-container"]}>
        <div className={styles["inputs"]}>
          <DefaultInput name="Nome" type="text" onChange={handleChangeFields} />
          <DefaultInput name="Email" type="email" onChange={handleChangeFields} />
          <DefaultInput name="Senha" type="password" onChange={handleChangeFields} />
          <SpecialInput
            name="cpf"
            label="CPF"
            mask="999.999.999-99"
            value={values.cpf}
            onChange={handleChange}
          />
          <SpecialInput
            name="cep"
            label="CEP"
            mask="99999-999"
            value={values.cep}
            onChange={handleChange}
          />
          <DefaultInput name="Data de nascimento" type="date" onChange={handleChangeFields} />
          <div className={styles["genders"]}>
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
          <div className={styles["typesOfAddresses"]}>
            {addressTypes.map(({ name, id }) => (
              <label className="label cursor-pointer">
                <span className="label-text">{name}</span>
                <input
                  value={id}
                  type="radio"
                  name="typeAddress"
                  className="radio checked:bg-green-900"
                />
              </label>
            ))}
          </div>
        </div>

        <div className={"button-add-image-container"}>
          <AddImage text="Adicione uma foto de perfil" />
          <GreenButton text="Cadastrar" onClick={handleClick} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUpConsumidor;
