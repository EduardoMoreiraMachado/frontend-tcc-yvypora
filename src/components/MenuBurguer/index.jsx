/* DISABLED COMPONENT */

import styles from "./style.module.css";

import { slide as Menu } from "react-burger-menu";
// import { useEffect, useState } from "react";

var stylesToComponent = {
  bmItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    textDecoration: "none",
    listStyle: "none",
  },
};

export const MenuBurguer = (width) => {
  // const setWindowDimensions = () => {
  //   setWindowWidth(window.innerWidth)
  //   setWindowHeight(window.innerHeight)
  //   console.log(windowWidth);
  // }

  // useEffect(() => {
  //     window.addEventListener('resize', setWindowDimensions);
  //     return () => {
  //       window.removeEventListener('resize', setWindowDimensions)
  //     }
  //   }, [])

  // if(windowWidth < 769 ){

  return (
    <div href="#" className={styles["menu-burger-container"]}>
      <i className={styles["menu-burger"]}>
        <Menu itemListClassName={"my-class"} styles={stylesToComponent}>
          <nav>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Transmissões ao vivo</a>
            </li>
            <li>
              <a href="/fair-near">Feiras próximas</a>
            </li>
            <li>
              <a href="/profile">Perfil</a>
            </li>
          </nav>
        </Menu>
      </i>
    </div>
  );
};
// }
export default MenuBurguer;
