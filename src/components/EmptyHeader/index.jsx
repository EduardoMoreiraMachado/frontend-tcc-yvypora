import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import { BurgerMenu } from "../BurgerMenu";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const EmptyHeader = ({ useMargin }) => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")))

  const navigation = useNavigate();

  const handleHomePage = () => {
    if (user) {
      if (user.typeof === "COSTUMER") {
        navigation('/');
      }
      else {
        navigation('/marketer');
      }
    } else {
      navigation('/')
    }
  }

  return (
    <header
      id="empty-header"
      className={useMargin === false ? "header-without-margins" : ""}
    >
      {/* <div id='burger-menu-container'>
        <BurgerMenu />
      </div> */}
      <div className="header-icon" style={{cursor: 'pointer'}} onClick={() => {handleHomePage()}}>
        <img className="icon-yvy" src={YvyporaTextIcon} alt="" />
      </div>
    </header>
  );
};
