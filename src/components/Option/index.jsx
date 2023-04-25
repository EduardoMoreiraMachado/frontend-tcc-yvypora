import styles from "./styles.module.css";

export const Option = ({ imgUrl, text, link }) => {
  return (
    <div className={styles["option-container"]}>
      <img className={styles["option-image"]} src={imgUrl} />
      <a href={link} className={styles["option-text"]}>
        {text}
      </a>
    </div>
  );
};

export default Option;
