import styles from "./styles.module.css";

import iconLogoff from "../../imgs/exportsquare.svg";
import ArrowIcon from "../../imgs/arrow_icon.svg";
import ArrowIconDown from "../../imgs/arrow_icon_down.svg";

import { useEffect, useState } from "react";

export const ExitOption = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function exit() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className={styles["exit-option-container"]}>
      <button
        onClick={handleClick}
        className={styles["exit-content"]}
        style={
          click
            ? { backgroundImage: `url(${ArrowIconDown})` }
            : { backgroundImage: `url(${ArrowIcon})` }
        }
      >
        <img className={styles["exit-option-image"]} src={iconLogoff} />
        <a href="#" className={styles["exit-option-text"]}>
          Sair
        </a>
      </button>
      {click && (
        <div className={styles["exit-confirm-options"]}>
          <h1>Tem certeza que deseja sair?</h1>
          <div className={styles["options-buttons"]}>
            <button id={styles["yes"]} onClick={exit}>
              SIM
            </button>
            <button onClick={handleClick} id={styles["no"]}>
              NÃO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
