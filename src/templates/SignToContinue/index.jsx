import styles from "./styles.module.css";

import { Footer } from "../../components/Footer";
import { GreenButton } from "../../components/GreenButton";
import { WhiteButton } from "../../components/WhiteButton";
import { EmptyHeader } from "../../components/EmptyHeader";

import { useNavigate } from 'react-router-dom';

export const SignToContinue = () => {
  const navigation = useNavigate();

  const handleLoginPage = () => {
    navigation('/login')
  }

  const handleSignPage = () => {
    navigation('/signup')
  }

  return (
    <div className={styles["sign-to-continue-container"]}>
      <EmptyHeader useMargin={false} />
      <div className={styles["sign-to-continue-content"]}>
        <div className={styles["message-box"]}>
          <h1>Para comprar esse produto, por favor acesse sua conta!</h1>
          <div className={styles["message-buttons"]}>
            <GreenButton 
              text="Login" 
              onClick={handleLoginPage}
            />
            <WhiteButton 
              text="Criar conta" 
              onClick={handleSignPage}
            />
          </div>
        </div>
      </div>
      <Footer useMargin={false} />
    </div>
  );
};

export default SignToContinue;
