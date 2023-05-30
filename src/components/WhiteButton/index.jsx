import styles from "./styles.module.css";

export const WhiteButton = ({ text, onClick }) => {
  return( 
    <button 
      className={styles["white_button"]}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
