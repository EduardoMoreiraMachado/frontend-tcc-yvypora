import styles from "./styles.module.css";

import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import { DefaultInput } from "../../components/DefaultInput";
import { SpecialInput } from "../../components/SpecialInput";
import { GreenButton } from "../../components/GreenButton";
import { Header } from "../../components/Header";

import { useState } from "react";
import { useEffect } from "react";
import { consumeCep } from "../../utils/fetchs/common/cepFetch";
import { useRef } from "react";
import { addAddressToCostumer } from "../../utils/fetchs/Costumer/costumer";
import { fetchCostumerFormFields } from "../../utils/fetchs/common/formFieldsFetch";
import { notify } from "../../utils/notify";
import { getDetails } from "../../utils/fetchs/common/user";

export const AddAdressPage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")));
  const [values, setValues] = useState({});
  const [formData, setFormData] = useState({});
  const [address, setAddress] = useState(null);
  const [typeOfAddress, setTypeOfAddress] = useState([]);

  const inputCEP = useRef(null);
  const inputNumber = useRef(null);
  const inputAddressStreet = useRef(null);
  const inputAddressNeighborhood = useRef(null);
  const inputAddressAdditionalInformation = useRef(null);

  useEffect(() => {
    fetchCostumerFormFields().then((res) => {
      setTypeOfAddress(res.typesOfAddress);
    });
  }, []);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    handleChangeFields(event);
  }

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = async (event) => {
    event.preventDefault();
    console.log(address);

    const selectedType = [];
    document.querySelectorAll("#type > input").forEach((type) => {
      if (type.checked) selectedType.push(type);
    });

    const { Numero: number, cep, Complemento: complemento } = formData;
    const { localidade: city, uf, bairro: neighborhood } = address;
    const logradouro = `${address.logradouro} N°${number.toString()}`;

    const addressData = {
      addressTypeId: selectedType[0].value,
      logradouro,
      cep,
      uf,
      city,
      neighborhood,
      complemento,
      number,
    };

    try {
      await addAddressToCostumer(addressData, user.id);
      await notify("success", "Novo endereço cadastrado");
      const newDetails = await getDetails();
      localStorage.setItem("user-details", JSON.stringify(newDetails));
    } catch (error) {
      console.log(error);
      await notify("error", "Não foi possivel adicionar novo endereço");
    }
  };

  useEffect(() => {
    const { cep } = formData;
    if (cep && cep.length === 8) {
      consumeCep(cep).then((data) => setAddress(data));
    }
  }, [formData]);

  useEffect(() => {
    if (address) {
      const { logradouro: streetName, bairro } = address;
      inputAddressStreet.current.value = streetName;
      inputAddressNeighborhood.current.value = bairro;
    }
  }, [address]);

  return (
    <div className={styles["add-adress-page-container"]}>
      <Header user={{picture_uri:""}}/>
      <div className={styles["add-adress-title"]}>
        <Title className={styles["title"]} text="Adicione um endereço" />
        <h1 className={styles["add-adress-subtitle"]}>
          Insira os dados do endereço onde seus produtos serão entregados.
        </h1>
      </div>
      <div className={"inputs-container"}>
        <div className={"inputs"}>
          <h1>Detalhes do endereço</h1>
          <SpecialInput
            name="cep"
            label="CEP"
            mask="99999-999"
            value={values.cep}
            onChange={handleChange}
            inputRef={inputCEP}
          />
          <DefaultInput
            name="Numero"
            type="number"
            inputRef={inputNumber}
            onChange={handleChangeFields}
          />
          <DefaultInput name="Rua" type="text" inputRef={inputAddressStreet} />
          <DefaultInput
            name="Bairro"
            type="text"
            inputRef={inputAddressNeighborhood}
          />
          <DefaultInput
            name="Complemento"
            type="text"
            onChange={handleChangeFields}
            inputRef={inputAddressAdditionalInformation}
          />
          <div className={styles["type-address"]}>
            {typeOfAddress.map((type) => {
              return (
                <div className={styles["type"]} id="type">
                  <input
                    type="checkbox"
                    id={type.name}
                    name="scales"
                    value={type.id}
                  />
                  <label for={type.name}>{type.name}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={"save-button"}>
        <GreenButton text="Salvar" onClick={handleClick} />
      </div>
      <Footer useMargin={false} />
    </div>
  );
};

export default AddAdressPage;
