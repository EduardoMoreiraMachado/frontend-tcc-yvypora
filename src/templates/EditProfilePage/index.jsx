import styles from "./styles.module.css";

import { Header } from "../../components/Header";
import NavBar from "../../components/NavBar";
import DefaultInput from "../../components/DefaultInput";
import SpecialInput from "../../components/SpecialInput";
import Footer from "../../components/Footer";
import GreenButton from "../../components/GreenButton";
import Title from "../../components/Title";
import { useState } from "react";

export const EditProfilePage = () => {
  const [values, setValues] = useState({});

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className={styles["edit-profile"]}>
      <Header
        user={JSON.parse(localStorage.getItem("user-details"))}
      />
      <Title text={"Editar Perfil"} />
      <div className={styles["main-edit-profile"]}>
        <NavBar />
        <div className={styles["inputs-button-container"]}>
          <div className={styles["inputs-edit-profile"]}>
            <DefaultInput name={"Nome"} type={"text"} />
            <DefaultInput name={"Email"} type={"email"} />
            <DefaultInput name={"Senha"} type={"password"} />
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
          </div>
          <GreenButton text="Salvar" type="submit" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
