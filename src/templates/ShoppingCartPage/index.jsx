/* DISABLED TEMPLATE */
import styles from "./styles.module.css";

import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";

import { useState } from "react";

export const ShoppingCartPage = () => {
  const [user, _setUser] = useState(JSON.parse(localStorage.getItem('user-details')));

  return (
    <div className={styles["shopping-cart-page-container"]}>
      <Header user={user}/>
      <div className={styles["cart-page-content"]}>
        <NavBar />
        <div className={styles["selected-products"]}>
          <ShoppingCartItem id={1} imgUrl={''}itemCountProp={1} name={123}price={1}setCartTotal={() => {}} unit={1} key={1}/>
        </div>
        <div className={styles["payment-method"]}></div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
