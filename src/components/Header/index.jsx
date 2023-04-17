import { useState } from "react";
import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import UserImage from "../UserImage";
import { useEffect } from "react";

export const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-details")))

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === 'user-details') {
        setUser(JSON.parse(event.newValue));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const handleChange = (event) => {
    setUser(JSON.parse(event.target.value));
    localStorage.setItem('user-details', event.target.value);
  };


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
