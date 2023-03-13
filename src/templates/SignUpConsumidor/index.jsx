import "./style.css";

import { Footer } from "../../components/Footer";
import { EmptyHeader } from "../../components/EmptyHeader";
import { DefaultInput } from "../../components/DefaultInput";
import { GreenButton } from "../../components/GreenButton";
import { SpecialInput } from "../../components/SpecialInput";
import { Title } from "../../components/Title";
import { AddImage } from "../../components/AddImage";

import { useEffect, useState } from "react";
import singUpCostumer from "../../utils/singUpCostumer";
import { cepAPI } from "../../api/api";
import { fetchCostumerFormFields } from "../../utils/formFieldsFetch";

export const SignUpConsumidor = () => {
  const [values, setValues] = useState({});
  const [genders, setGenders] = useState([]);
  const [addresType, setAddressType] = useState([]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    const fetch = async () => {
      const fields = await fetchCostumerFormFields();
      console.log(fields);

      setGenders(fields.genders);
      setAddressType(fields.typesOfAddress);
    };

    fetch().catch();


    console.log(genders)
  }, []);

  const handleClick = async (e) => {
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
      dataDeNascimento: String,
      gender: String,
    };
    const { cep, cpf } = values;
    const inputs = document.querySelectorAll("input");
    const valuesOfInputs = [];
    inputs.forEach((input) => {
      valuesOfInputs.push(input.value);
    });

    costumer.name = valuesOfInputs[0];
    costumer.email = valuesOfInputs[1];
    costumer.password = valuesOfInputs[2];
    costumer.cpf = cpf;
    costumer.cep = cep;
    costumer.gender = "M"; // add to input
    costumer.dataDeNascimento = valuesOfInputs[5];

    const { data } = await cepAPI.get(`${cep}/json/`);

    costumer.address.cep = cep;
    costumer.address.city = data.localidade;
    costumer.address.uf = data.uf;
    costumer.address.logradouro = data.logradouro;
    costumer.address.number = 146; // add to input
    costumer.address.neighborhood = data.bairro;
    costumer.address.complemento = ""; // add to input
    costumer.address.addressTypeId = 1; // add to input

    const res = await singUpCostumer(costumer);

    console.log(res);
  };

  return (
    <div className="main-cadastro">
      <EmptyHeader />

      <div className="title-container">
        <Title text="Cadastre-se" />
      </div>
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
            name="cep"
            label="CEP"
            mask="99999-999"
            value={values.cep}
            onChange={handleChange}
          />
          <DefaultInput name="Data de nascimento" type="date" />

          {/* TODO  */}
          
          {
            // transform gender data into input options
            genders.map(({ name, id}) => (
            <label className="label cursor-pointer">
                <span className="label-text">{name}</span> 
                <input type="radio" name="radio-20" className="radio checked:bg-green-900"/>
              </label>
            ))
          }

          {
            // transform type of address data into input options
          }
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

export default SignUpConsumidor;
