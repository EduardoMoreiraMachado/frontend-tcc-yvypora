import styles from "./style.module.css";

import { useState } from "react";

export const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active);
  };

  return (
    <div className={styles["burger-menu-container"]}>
      <div
        className={active ? styles["icon icon-active"] : styles["icon"]}
        onClick={toggleMode}
      >
        <div className={styles["burger burger-icon"]}></div>
      </div>
      <div
        className={
          active ? styles["menu menu-open"] : styles["menu menu-close"]
        }
      >
        <div className={styles["list"]}>
          <ul className={styles["list-items"]}>
            <li>Home</li>
            <li>Transmissões ao vivo</li>
            <li>Feiras próximas</li>
            <li>Perfil</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
