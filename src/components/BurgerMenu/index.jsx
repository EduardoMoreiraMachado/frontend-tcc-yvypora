import './burger-menu.css'

import HomeImg from "../../imgs/home.svg";
import VideoImg from "../../imgs/video.svg";
import FairImg from "../../imgs/fair_responsive.png";
import ProfileImg from "../../imgs/profile.svg";

import { useState } from "react";

export const BurgerMenu = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")))
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
          {user?.typeof === "COSTUMER" ?
            <ul className="list-items">
              <a href='/'><li><img src={HomeImg} alt=''/>Home</li></a>
              <a href='/live'><li><img src={VideoImg} alt=''/>Transmissões ao vivo</li></a>
              <a href='/fair-near'><li><img src={FairImg} alt=''/>Feiras próximas</li></a>
              <a href='/profile/costumer'><li><img id='profile' src={ProfileImg} alt=''/>Perfil</li></a>
            </ul>
            :
            <ul className="list-items">
              <a href='/marketer'><li><img src={HomeImg} alt=''/>Home</li></a>
              <a href='/live'><li><img src={VideoImg} alt=''/>Realizar transmissão</li></a>
              <a href='/fair/fairs'><li><img src={FairImg} alt=''/>Feiras cadastradas</li></a>
              <a href='/profile/marketer'><li><img id='profile' src={ProfileImg} alt=''/>Perfil</li></a>
            </ul>
          }
        </div>
      </div>
    </div>
  );
};
