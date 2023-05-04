import { ButtonCart } from "../ButtonCart";
import styles from "./styles.module.css";

import HomeImg from "../../imgs/home.svg";
import VideoImg from "../../imgs/video.svg";
import FairImg from "../../imgs/fair.svg";
import ProfileImg from "../../imgs/profile.svg";

export const NavBar = () => {
  return (
    <div className={styles["nav-bar-container"]}>
      <div className={styles["upper-nav"]}>
        <a className={styles["bar-image"]} href="/">
          <img src={HomeImg} alt="" className={styles["page-icon"]} />
        </a>
        <a className={styles["bar-image"]} href="#">
          <img src={VideoImg} alt="" className={styles["page-icon"]} />
        </a>
      </div>
      <div className={styles["button-container"]}>
        <ButtonCart />
      </div>

      <div className={styles["lower-nav"]}>
        <a className={styles["bar-image"]} href="/fair-near">
          <img src={FairImg} alt="" className={styles["page-icon"]} />
        </a>
        <a className={styles["bar-image"]} href="/profile">
          <img src={ProfileImg} alt="" className={styles["page-icon"]} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
