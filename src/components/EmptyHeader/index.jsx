import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

import { BurgerMenu } from "../BurgerMenu";

export const EmptyHeader = ({ useMargin }) => {
  return (
    <header
      id="empty-header"
      className={useMargin === false ? "header-without-margins" : ""}
    >
      {/* <div id='burger-menu-container'>
        <BurgerMenu />
      </div> */}
      <div className="header-icon">
        <img className="icon-yvy" src={YvyporaTextIcon} alt="" />
      </div>
    </header>
  );
};
