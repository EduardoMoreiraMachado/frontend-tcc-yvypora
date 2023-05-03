import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";
import UserImage from "../UserImage";

import { BurgerMenu } from "../BurgerMenuTest";

export const Header = ({ user }) => {
  return (
    <header id="default-header">
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
