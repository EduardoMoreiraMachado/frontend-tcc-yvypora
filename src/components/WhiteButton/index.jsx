import styles from "./style.module.css";

export const WhiteButton = ({ text }) => {
  return <button className={styles["white_button"]}>{text}</button>;
};
