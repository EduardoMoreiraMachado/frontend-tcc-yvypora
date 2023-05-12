import PromoImg from "../../imgs/promotion1.svg";

import styles from "./styles.module.css";

import { useEffect, useState } from "react";

export const ShoppingItem = ({ name, imgUrl, weight, price, promo }) => {
  const [promoExists, setPromoExists] = useState(0);
  const [promoValue, setPromoValue] = useState(null);
  const priceProcessed = price.toString().replace(/\./g, ",");
  const oldPrice = price.toFixed(2).toString(2).replace(/\./g, ",")

  useEffect(() => {
    if (promo) {
      // Calc price with discount
      const value = (price - (price * (promo / 100))).toFixed(2).toString().replace(/\./g, ",")
      
      setPromoValue(value)
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
          {promo &&
            <h2 className={styles['old-price']}>R$ {oldPrice}</h2>
          }
          <h1 className={styles["weight"]}>{weight}</h1>
          <span className={styles["price-general"]}>R$ {promoValue ? promoValue : priceProcessed}</span>
        </div>
        <div className={styles["cart-icon-box"]}>
          <button className={styles["cart-icon"]} />
        </div>
      </div>
    </div>
  );
};
