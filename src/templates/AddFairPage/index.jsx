import { SpecialInput } from "../../components/SpecialInput";
import { TitleSubtitle } from "../../components/TitleSubtitle";
import { useState, useEffect } from "react";
import { DefaultInput } from "../../components/DefaultInput";
import { AddImage } from "../../components/AddImage";
import { GreenButton } from "../../components/GreenButton";
import { Footer } from "../../components/Footer";
import { fetchFairFormFields } from "../../utils/fetchs/common/formFieldsFetch";
import {
  createFair,
  addImageInFair,
  addFairToMarketer,
} from "../../utils/fetchs/Marketer/fairsFetch";

import "./style.css";
import { consumeCep } from "../../utils/fetchs/common/cepFetch";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Header } from "../../components/Header";

const MySwal = withReactContent(Swal);

export const AddFairPage = () => {
  const [values, setValues] = useState({});
  const [address, setAddress] = useState({});
  const [daysOfWeekFields, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fields = await fetchFairFormFields({
        latitude: 20,
        longitude: -20,
      });
      console.log(fields);
      setDaysOfWeek(fields[0].daysOfWeeks);
    };
    fetch().then().catch();
    console.log(daysOfWeekFields);
  }, []);

  async function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    const { cep } = values;
    if (cep.length === 8) {
      const data = await consumeCep(cep);
      if (!data) {
        MySwal.fire({
          timer: 1500,
          showConfirmButton: false,
          title: <p>Cep Errado!</p>,
          icon: "error",
          buttonsStyling: false,
          timerProgressBar: true,
        });
        document.querySelector('input[name="cep"]').value = "";
      } else {
        setAddress(data);
        const name = document.querySelector("#fair-name");
        name.textContent = `Feira do ${data.bairro} - ${data.logradouro}`;
      }
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const name = `Feira do ${address.bairro} - ${address.logradouro}`;
    const cep = document.querySelector('input[name="cep"]').value;
    const abertura = document.querySelector(
      'input[name="Horário de abertura"]'
    ).value;
    const fechamento = document.querySelector(
      'input[name="Horário de encerramento"]'
    ).value;

    const dayOfWeekSelector = document.querySelector("#day-of-week");

    const dayOfWeekOption =
      dayOfWeekSelector.options[dayOfWeekSelector.selectedIndex];

    const data = {
      name,
      address: {
        cep,
        number: 0,
        complemento: "",
        addressTypeId: 3,
        city: address.localidade,
        logradouro: address.logradouro,
        uf: address.uf,
        neighborhood: address.bairro,
      },
      dateAndHourOfWork: [
        {
          open: `${abertura}:00`,
          close: `${fechamento}:00`,
          dayOfWeek: {
            id: dayOfWeekOption.id,
            name: dayOfWeekOption.value,
          },
        },
      ],
    };

    try {
      const { payload } = await createFair(data);
      console.log(payload);
      const { id } = payload;

      const file = document.querySelector("#file-selection").files[0];
      const formdata = new FormData();

      formdata.append("picture", file);

      try {
        await addImageInFair(id, formdata);
      } catch (e) {
        console.log(e);
      }

      await addFairToMarketer(id);

      MySwal.fire({
        timer: 3000,
        showConfirmButton: false,
        title: <p>Nova Feira</p>,
        html: <p>Successo! Nova Feira Cadastrada</p>,
        icon: "success",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    } catch (e) {
      console.log(e);
      let message = e.response?.data.message;

      MySwal.fire({
        timer: 3000,
        showConfirmButton: false,
        title: <p>Falha ao Cadastrar Feira</p>,
        html: <p>{message}</p>,
        icon: "error",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="add-fair-page-container">
      <Header
        imgUrl={
          "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
        }
      />
      <TitleSubtitle
        text={"Escolha o local"}
        subtitle="Insira as feiras onde seus produtos serão vendidos"
      />
      <div className="input-container">
        <div className="inputs">
          <h1>Detalhes da feira</h1>
          <h2 id="fair-name">Nome da Feira: </h2>
          <SpecialInput
            name="cep"
            label="CEP do local da feira"
            mask="99999-999"
            value={values.cep}
            onChange={handleChange}
          />

          <DefaultInput name="Horário de abertura" type="time" />
          <DefaultInput name="Horário de encerramento" type="time" />

          <div className="drop-box">
            <label className="default-label" htmlFor="product-type">
              Dia de Funcionamento
            </label>
            <select name="product-type" id="day-of-week">
              {daysOfWeekFields.map((day) => {
                return (
                  <option value={day.name} id={day.id}>
                    {day.name}
                  </option>
                );
              })}
            </select>
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

export default AddFairPage;
