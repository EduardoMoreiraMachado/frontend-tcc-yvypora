import "./style.css";

// import FruitsFooter from '../../imgs/fruits_footer.jpg'

import { EmptyHeader } from "../../components/EmptyHeader";
import { DefaultInput } from "../../components/DefaultInput";
import { GreenButton } from "../../components/GreenButton";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import { commonsAPI } from "../../api/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);

export const Login = () => {
  // const navigate = useNavigate(); // hook

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const inputs = document.querySelectorAll("input");

      const email = inputs[0].value;
      const password = inputs[1].value;

      const { data } = await commonsAPI.post("/login/", {
        email,
        password,
        typeOfUser: "COSTUMER",
      });


      MySwal.fire({
        timer: 1500,
        showConfirmButton: false,
        title: <p>Login Bem Sucedido!</p>,
        icon: "success",
        buttonsStyling: false,
        timerProgressBar: true,
      });

      localStorage.setItem("user-logged-token", data.token);

      // navigate("/home") // path
    } catch (error) {
      let message = error.response?.data.message
      if (!message) message = "Error!"
      MySwal.fire({
        timer: 4500,
        showConfirmButton: false,
        title: <p>{message}</p>,
        icon: "error",
        buttonsStyling: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="main">
      <header>
        <EmptyHeader />
      </header>
      <Title text="Login" />
      <form>
        <div className="input-container">
          <div className="input">
            <DefaultInput name="Email" type="text" />
            <DefaultInput name="Senha" type="password" />
          </div>

          <div className="button-container">
            <GreenButton text="Entrar" onClick={handleClick} type="submit" />
          </div>
        </div>
      </form>

      {/* <div className='fruits-footer'></div> */}

      <Footer />
    </div>
  );
};

export default Login;
