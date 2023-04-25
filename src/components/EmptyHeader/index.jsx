import YvyporaTextIcon from "../../imgs/yvypora_text_icon.svg";

export const EmptyHeader = ({ useMargin }) => {
  return (
    <header
      id="empty-header"
      className={useMargin === false ? "header-without-margins" : ""}
    >
      <div className="header-icon">
        <img className="icon-yvy" src={YvyporaTextIcon} alt="" />
      </div>
    </header>
  );
};
