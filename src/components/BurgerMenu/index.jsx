import './burger-menu.css'

import HomeImg from "../../imgs/home.svg";
import VideoImg from "../../imgs/video.svg";
import FairImg from "../../imgs/fair_responsive.png";
import ProfileImg from "../../imgs/profile.svg";

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
            <li><img src={HomeImg} alt=''/> Home</li>
            <li><img src={VideoImg} alt=''/> Transmissões ao vivo</li>
            <li><img src={FairImg} alt=''/> Feiras próximas</li>
            <li><img id='profile' src={ProfileImg} alt=''/> Perfil</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
