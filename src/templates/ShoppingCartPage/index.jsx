/* DISABLED TEMPLATE */
import styles from "./styles.module.css";

import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";

export const ShoppingCartPage = () => {
  return (
    <div className={styles["shopping-cart-page-container"]}>
      <Header user={{picture_uri:""}}/>
      <div className={styles["cart-page-content"]}>
        <NavBar />
        <div className={styles["selected-products"]}>
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
        </div>
        <div className={styles["payment-method"]}></div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
