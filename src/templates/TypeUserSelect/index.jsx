import styles from "./styles.module.css";

import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import { GreenButton } from "../../components/GreenButton";
import { WhiteButton } from "../../components/WhiteButton";
import { Footer } from "../../components/Footer";

export const TypeUserSelect = () => {
  return (
    <div className={styles["type-user-select-container"]}>
      <header className="header-without-margins">
        <div className="header-icon">
          <img className="icon-yvy" src={YvyporaTextIcon} alt="" />
        </div>
      </header>
      <div className={styles["welcome-container"]}>
        <div className={styles["welcome-message"]}>
          <h1 className={styles["welcome-text"]}>
            Boas-vindas ao{" "}
            <span className={styles["strong-welcome-text"]}>yvyporã</span>, a
            sua feira digital!
          </h1>
          <div className={styles["welcome-image"]}></div>
        </div>
        <div className={styles["user-select"]}>
          <h1 className={styles["user-select-text"]}>
            Como você usará a plataforma?
          </h1>
          <GreenButton text="Consumidor" />
          <WhiteButton text="Feirante" />
        </div>
      </div>
      <Footer useMargin={false} />
    </div>
  );
};

export default TypeUserSelect;
