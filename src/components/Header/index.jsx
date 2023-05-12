import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";
import UserImage from "../UserImage";
import { BurgerMenu } from "../BurgerMenu";

export const Header = ({ user, useMargin }) => {
  return (
    <header id="default-header" className={useMargin === false ? "header-without-margins" : ""}>
      <div id='burger-menu-container'>
        <BurgerMenu />
      </div>
      <div className="header-icon" id="default-header-icon">
        <img className="text-icon" src={YvyporaTextIcon} alt="" />
      </div>
      <div className="header-user-image">
        <UserImage imgUrl={user.picture_uri} />
      </div>
    </header>
  );
};

export default Header;
