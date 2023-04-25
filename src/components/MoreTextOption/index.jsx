import styles from "./styles.module.css";

import ArrowIcon from "../../imgs/arrow_icon.svg";
import ArrowIconDown from "../../imgs/arrow_icon_down.svg";

import { useState } from "react";

export const MoreTextOption = ({ title, text }) => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((prevClick) => !prevClick);
  }

  return (
    <div className={styles["more-text-option-container"]}>
      <button
        onClick={handleClick}
        className={styles["more-text-content"]}
        style={
          click
            ? { backgroundImage: `url(${ArrowIconDown})` }
            : { backgroundImage: `url(${ArrowIcon})` }
        }
      >
        <span
          className={styles["more-text-title"]}
          style={
            click
              ? { maxWidth: "100ch", textOverflow: "unset", textAlign: "start" }
              : { maxWidth: "22ch", whiteSpace: "nowrap" }
          }
        >
          {title}
        </span>
      </button>
      {click && (
        <div className={styles["more-text-text"]}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};
