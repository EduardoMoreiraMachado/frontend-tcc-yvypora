import styles from "./styles.module.css";

export const Fair = ({ imgUrl, name, days, hours }) => {
  return (
    <div className={styles["fair-container"]}>
      <div className={styles["fair-image"]}>
        <img className={styles["image"]} src={imgUrl} alt="" />
      </div>
      <div className={styles["fair-info"]}>
        <span className={styles["name"]}>{name}</span>
        <div className={styles["data-info"]}>
          <div className={styles["data"]}>
            <h1 className={styles["data-type"]}>Dias:</h1>
            <h1 className={styles["data-text"]} id={styles["days"]}>
              {days}
            </h1>
          </div>
          <div className={styles["data"]}>
            <h1 className={styles["data-type"]}>Horário de funcionamento:</h1>
            <h1 className={styles["data-text"]}>{hours}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
