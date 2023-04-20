import styles from "./styles.module.css";

export const WhiteButton = ({ text }) => {
  return <button className={styles["white_button"]}>{text}</button>;
};
