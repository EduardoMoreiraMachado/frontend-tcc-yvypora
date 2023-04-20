import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles["contacts-container"]}>
        <div className={styles["contact-item"]}>
          <i className="fa-solid fa-phone"></i>
          <h1 className={styles["social-text"]}>(11) 4774-4700</h1>
        </div>
        <div className={styles["contact-item"]}>
          <i className="fa-solid fa-envelope"></i>
          <h1 className={styles["social-text"]}>yvypora@gmail.com</h1>
        </div>
        <div className={styles["contact-item"]}>
          <i className="fa-solid fa-location-dot"></i>
          <h1 className={styles["social-text"]}>Rua tcc, 211, Centro, SP</h1>
        </div>
      </div>
      <div className={styles["copyright"]}>
        <h1 className={styles["copyright-text"]}>Copyright © 2023 | yvyporã</h1>
      </div>
      <div className={styles["social-container"]}>
        <a href="#">
          <div className={styles["social-item"]}>
            <i id={styles["social-icon"]} className="fa-brands fa-youtube"></i>
          </div>
        </a>
        <a href="#">
          <div className={styles["social-item"]}>
            <i id={styles["social-icon"]} className="fa-brands fa-twitter"></i>
          </div>
        </a>
        <a href="#">
          <div className={styles["social-item"]}>
            <i
              id={styles["social-icon"]}
              className="fa-brands fa-instagram"
            ></i>
          </div>
        </a>
        <a href="#">
          <div className={styles["social-item"]}>
            <i
              id={styles["social-icon"]}
              className="fa-brands fa-facebook-f"
            ></i>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
