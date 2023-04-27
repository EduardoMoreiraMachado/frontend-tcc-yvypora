import './burger-menu.css'

import { useState } from "react";

export const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active);
  };

  return (
    <div className="burger-menu-container">
      <div
        className={active ? "icon icon-active" : "icon"}
        onClick={toggleMode}
      >
        <div className="burger burger-icon"></div>
      </div>
      <div className={active ? "menu menu-open" : "menu menu-close"}>
        <div className="list">
          <ul className="list-items">
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
