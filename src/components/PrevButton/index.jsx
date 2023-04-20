import styles from "./styles.module.css";

export const PrevButton = ({ onClick }) => {
  return (
    <button
      className={styles["prev-button-container"]}
      onClick={onClick}
    ></button>
  );
};
