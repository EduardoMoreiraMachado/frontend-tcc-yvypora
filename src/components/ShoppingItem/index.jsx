import PromoImg from "../../imgs/promotion1.svg";

import styles from "./styles.module.css";

import { useEffect, useState } from "react";

export const ShoppingItem = ({ name, imgUrl, weight, price, promo }) => {
  const [promoExists, setPromoExists] = useState(0);

  const priceProcessed = price.toString().replace(/\./g, ",");

  useEffect(() => {
    if (promo) {
      setPromoExists(100);
    }
  }, []);

  return (
    <div className={styles["shopping-item-container"]}>
      <div className={styles["item-visual"]}>
        <div className={styles["header-card"]}>
          <h1 className={styles["name"]}>{name}</h1>
          <img
            className={styles["promotion-img "]}
            src={PromoImg}
            alt=""
            style={{ opacity: promoExists }}
          />
        </div>
        <div className={styles["image"]} style={{backgroundImage: `url(${imgUrl})`}} alt=""> </div>
      </div>
      <div className={styles["item-numbers"]}>
        <div className={styles["numbers"]}>
          <h1 className={styles["weight"]}>{weight}</h1>
          <span className={styles["price-general"]}>R$ {priceProcessed}</span>
        </div>
        <div className={styles["cart-icon-box"]}>
          <button className={styles["cart-icon"]} />
        </div>
      </div>
    </div>
  );
};
