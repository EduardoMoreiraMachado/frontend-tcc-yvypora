import styles from "./styles.module.css";

import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import { GreenButton } from "../../components/GreenButton";
import { WhiteButton } from "../../components/WhiteButton";
import { Footer } from "../../components/Footer";

import { useNavigate } from 'react-router-dom';

export const TypeUserSelect = () => {
  const navigation = useNavigate();

  const handleCostumerSign = () => {
    navigation('/signup/costumer');
  }

  const handleMarketerSign = () => {
    navigation('/signup/marketer');
  }

  return (
    <div className={styles["type-user-select-container"]}>
      <header className="header-without-margins">
        <a className="header-icon" href='/'>
          <img className="icon-yvy" src={YvyporaTextIcon} alt="" />
        </a>
      </header>
      <div className={styles["welcome-container"]}>
        <div className={styles["welcome-message"]}>
          <h1 className={styles["welcome-text"]}>
            Boas-vindas ao{" "}
            <span className={styles["strong-welcome-text"]}>yvyporã</span>, a
            sua feira digital!
          </h1>
          <div className={styles["welcome-image"]}></div>
          <a className={styles["delivery-text"]} href='/delivery'>
            Conheça também o nosso serviço de entregas
          </a>
        </div>
        <div className={styles["user-select"]}>
          <h1 className={styles["user-select-text"]}>
            Como você usará a plataforma?
          </h1>
          <GreenButton 
            text="Consumidor"
            onClick={() => {handleCostumerSign()}}
          />
          <WhiteButton 
            text="Feirante" 
            onClick={() => {handleMarketerSign()}}
          />
        </div>
      </div>
      <Footer useMargin={false} />
    </div>
  );
};

export default TypeUserSelect;
