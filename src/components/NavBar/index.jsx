import { ButtonCart } from "../ButtonCart";
import styles from "./styles.module.css";

import HomeImg from "../../imgs/home.svg";
import VideoImg from "../../imgs/video.svg";
import FairImg from "../../imgs/fair.svg";
import ProfileImg from "../../imgs/profile.svg";

import { useEffect, useState } from "react";

export const NavBar = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem("user-details")))

  const [type, setType] = useState("")
  const [fairPath, setFairPath] = useState("")

  useEffect(() => {
    if (user) {
      if (user.typeof === "COSTUMER") {
        setType("")
        setFairPath("fair-near")
      }
      else {
        setType("marketer")
        setFairPath("fair/fairs")
      }
    }
  }, [user])

  return (
    <div className={styles["nav-bar-container"]}>
      <div className={styles["upper-nav"]}>
        <a className={styles["bar-image"]} href={`/${type}`}>
          <img src={HomeImg} alt="" className={styles["page-icon"]} />
        </a>
        <a className={styles["bar-image"]} href='/live'>
          <img src={VideoImg} alt="" className={styles["page-icon"]} />
        </a>
      </div>
      <div className={styles["button-container"]}>
        <ButtonCart />
      </div>

      <div className={styles["lower-nav"]}>
        <a className={styles["bar-image"]} href={`/${fairPath}`}>
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
