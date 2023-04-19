import "./style.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { Title } from "../../components/Title";
import { DefaultInput } from "../../components/DefaultInput";
import { SpecialInput } from "../../components/SpecialInput";
import { GreenButton } from "../../components/GreenButton";
import { appendPictureToUser } from "../../utils/fetchs/common/picture";
import { useState } from "react";
import AddImage from "../../components/AddImage";
import { updateCostumerAccount } from "../../utils/fetchs/Costumer/costumer";
import { getDetails } from "../../utils/fetchs/common/user";
import { notify } from "../../utils/notify";

const MySwal = withReactContent(Swal);

export const UpdateConsumidorAccount = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user-details"))
  );

  const [formData, setFormData] = useState({
    Nome: "",
    Email: "",
    Senha: "",
    "Data de nascimento": "",
  });

  const handleChangeFields = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [values, setValues] = useState({});
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = async (event) => {
    event.preventDefault();

    const cpf = document
      .querySelector('input[name="cpf"]')
      .value.replaceAll(".", "")
      .replaceAll("-", "");

    const data = {};

    data.id = user.id;

    if (cpf) data.cpf = formData.cpf;
    if (formData.Nome) data.name = formData.Nome;
    if (formData["Data de nascimento"])
      data.birthday = formData["Data de nascimento"];
    if (formData.Email) data.email = formData.Email;
    if (formData.Senha) data.password = formData.Senha;

    const image = document.getElementById("file-selection").files[0];
    const formdata = new FormData();
    formdata.append("picture", image);

    try {
      const { newToken: token } = await updateCostumerAccount(data);
      localStorage.setItem("user-logged-token", token);
    } catch (err) {
      console.log(err);
    }

    if (image) {
      await appendPictureToUser(formdata);
    }

    const updatedDetails = await getDetails();

    localStorage.setItem("user-details", JSON.stringify(updatedDetails));

    setUser(updatedDetails);

    await notify("success", "Conta atualizada com sucesso!");

    window.location.reload(true);

    // TODO add request to update
  };

  return (
    <div className="update-consumidor-account-container">
      <Header user={user} />
      <div className="update-content">
        <div className="nav-bar">
          <NavBar />
        </div>
        <form className="update-inputs">
          <Title text="Editar conta" />
          <DefaultInput name="Nome" type="text" onChange={handleChangeFields} />
          <DefaultInput
            name="Email"
            type="email"
            onChange={handleChangeFields}
          />
          <DefaultInput
            name="Senha"
            type="password"
            onChange={handleChangeFields}
          />
          <SpecialInput
            name="cpf"
            label="CPF"
            mask="999.999.999-99"
            value={values.cpf}
            onChange={handleChange}
          />
          <DefaultInput
            name="Data de nascimento"
            type="date"
            onChange={handleChangeFields}
          />
        </form>
        <div className="green-button">
          <AddImage />
          <GreenButton onClick={handleClick} text="Salvar" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateConsumidorAccount;
