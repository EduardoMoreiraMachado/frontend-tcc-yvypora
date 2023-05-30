import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";
import UserImage from "../UserImage";

import { BurgerMenu } from "../BurgerMenu";

import { useNavigate } from 'react-router-dom';


export const Header = ({ user, useMargin }) => {
  const navigation = useNavigate();

  const handleHomePage = () => {
    if (user) {
      if (user.typeof === "COSTUMER") {
        navigation('/');
      }
      else {
        navigation('/marketer');
      }
    }
  }

  const handleProfilePage = () => {
    if (user) {
      if (user.typeof === "COSTUMER") {
        navigation('/profile/costumer');
      }
      else {
        navigation('/profile/marketer');
      }
    }
  }

  return (
    <header id="default-header" className={useMargin === false ? "header-without-margins" : ""}>
      <div id='burger-menu-container'>
        <BurgerMenu />
      </div>
      <div className="header-icon" id="default-header-icon" style={{cursor: 'pointer'}} onClick={() => {handleHomePage()}}>
        <img className="text-icon" src={YvyporaTextIcon} alt=""/>
      </div>
      <div className="header-user-image" style={{cursor: 'pointer'}} onClick={() => {handleProfilePage()}}>
        <UserImage imgUrl={user.picture_uri} />
      </div>
    </header>
  );
};

export default Header;
