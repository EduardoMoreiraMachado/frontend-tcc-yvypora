import { useEffect } from "react";
import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import UserImage from "../UserImage";
import { useState } from "react";

export const Header = ({ user }) => {
  return (
    <header id="default-header">
      <div className="header-icon" id="default-header-icon">
        <img className="text-icon" src={YvyporaTextIcon} alt="" />
      </div>
      <UserImage imgUrl={user.picture_uri} />
    </header>
  );
};

export default Header;
