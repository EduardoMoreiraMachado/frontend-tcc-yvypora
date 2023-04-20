import styles from "./style.module.css";

export const GreenButton = ({ text, onClick, type }) => {
  return (
    <button
      type={type}
      href="#"
      className={styles["green_button"]}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GreenButton;
