import styles from "./styles.module.css";

import { useState } from "react";

export const ToggleSwitch = ({ defaultCheckedValue, inputRef, secondInputRef }) => {
  const [isChecked, setIsChecked] = useState(defaultCheckedValue);
  // const [value, setValue] = useState('');
  const [value, setValue] = useState(null);

  // verificar se o checkbox está ativado
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleChange = (event) => {
    let inputValue = event.target.value;

    // limita a quantidade de números
    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2);
    }

    setValue(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "-" || event.key === "+" || event.key === "e") {
      event.preventDefault();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "0" && value === "") {
      event.preventDefault();
    }
  };

  return (
    <div className={styles["toggle-switch-container"]}>
      <label className={styles["switch"]}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={styles["slider"] + " " + styles["round"]}></span>
      </label>
      <div
        className={
          isChecked
            ? styles["percentage-input-container"]
            : styles["percentage-input-none"]
        }
      >
        <input
        ref={inputRef}
          className={styles["input-active"]}
          type="number"
          value={value}
          min="1"
          max="99"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onKeyPress={handleKeyPress}
        />
        <span className={styles["percentage-symbol"]}></span>
      </div>
    </div>
  );
};
