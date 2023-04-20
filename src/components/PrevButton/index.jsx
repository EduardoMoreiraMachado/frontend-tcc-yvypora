import styles from "./style.module.css";

export const PrevButton = ({ onClick }) => {
  return (
    <button
      className={styles["prev-button-container"]}
      onClick={onClick}
    ></button>
  );
};
