import styles from "./styles.module.css";

import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import { GreenButton } from "../../components/GreenButton";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { getDetails } from "../../utils/fetchs/common/user";
import { useState } from "react";
import { login } from "../../utils/fetchs/common/login";
import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);

export const Login = () => {
  const navigate = useNavigate(); // hook
  const [location, setLocation] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const inputs = document.querySelectorAll("input");

      const email = inputs[0].value;
      const password = inputs[1].value;

      const { token } = await login({ email, password });

      localStorage.setItem("user-logged-token", token);

      const details = await getDetails();
      localStorage.setItem("user-details", JSON.stringify(details));

      await MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Bem Vindo de volta {details.name}</p>,
        icon: "success",
        buttonsStyling: false,
        timerProgressBar: true,
      });

      navigate("/") // path
    } catch (error) {
      console.log(error);

      let message = error.response?.data.message;
      if (!message) message = "Error!";
      await MySwal.fire({
        timer: 4500,
        showConfirmButton: false,
        title: <p>Erro! Verifique o email ou a senha</p>,
        icon: "error",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className={styles["login-container"]}>
      <header className="header-without-margins">
        <div className="header-icon">
          <img className="icon-yvy" src={YvyporaTextIcon} alt="" />
        </div>
      </header>
      <div className={styles["login-content"]}>
        <Title text="Login" />
        <div className={styles["input-container"]}>
          <div className={styles["input"]}>
            <div className={styles["default-input-container"]}>
              <label
                className={styles["default-label"]}
                htmlFor="input-default"
              >
                E-mail
              </label>
              <input
                className={styles["default-input"]}
                type="text"
                id="input-default"
                name="e-mail"
              />
            </div>

            <div className={styles["default-input-container"]}>
              <label
                className={styles["default-label"]}
                htmlFor="input-default"
              >
                Senha
              </label>
              <input
                className={styles["default-input"]}
                type="password"
                id="input-default"
                name="senha"
              />
            </div>
          </div>
          <div className={styles["button-container"]}>
            <GreenButton text="Entrar" onClick={handleClick} type="submit" />
          </div>
        </div>
      </div>
      <Footer useMargin={false}/>
    </div>
  );
};

export default Login;
