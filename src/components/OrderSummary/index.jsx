import styles from "./styles.module.css";

import { GreenButton } from "../GreenButton";

export const OrderSummary = ({ totalPrice }) => {
  return (
    <div className={styles["order-summary-container"]}>
      <span className={styles["summary-title"]}>Resumo do pedido</span>
      <div className={styles["summary-price"]}>
        <h1 className={styles["total-text"]}>TOTAL:</h1>
        <h1 className={styles["total-price"]}>R${totalPrice}</h1>
      </div>
      <div className={styles["payment-button"]}>
        <GreenButton text="Pagar" />
      </div>
    </div>
  );
};
