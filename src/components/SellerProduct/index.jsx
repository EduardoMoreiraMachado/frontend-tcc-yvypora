import { useState } from "react";

import styles from "./styles.module.css";

import DeleteImage from "../../imgs/delete_icon.svg";
import UpdateImage from "../../imgs/update_icon.svg";
import PauseImage from "../../imgs/pause_icon.svg";

export const SellerProduct = ({
  name,
  imgUrl,
  unit,
  price,
  available_quantity,
  type_of_price,
}) => {
  const [itemCount, setItemCount] = useState(available_quantity);

  const pauseProduct = async () => {

  }
  const startProduct = async () => {
    
  }

  const update = async () => {

  }

  const delete = async () => {

  }

  useEffect(() => {
    // TODO update each time the item count changes
  }, [itemCount])

  return (
    <div className={styles["seller-product-container"]}>
      <div className={styles["product-data"]}>
        <div className={styles["product-visual"]}>
          <h1 className={styles["name"]}>{name}</h1>
          <img className={styles["image"]} src={imgUrl} alt="" />
        </div>
        <div className={styles["product-price"]}>
          <h1 className={styles["unit"]}>
            {unit} {type_of_price}
          </h1>
          <span className={styles["price"]}>R$ {price}</span>
        </div>
      </div>
      <div className={styles["product-quantity"]}>
        <div className={styles["number-quantity"]}>
          <span className={styles["text"]}>Quantidade disponível</span>
          <div className={"amount"}>
            <button
              className={styles["sub-button"]}
              onClick={() => {
                itemCount > 0 && setItemCount(itemCount - 1);
              }}
            />
            <h1 className={styles["number"]}>{itemCount}</h1>
            <button
              className={styles["add-button"]}
              onClick={() => setItemCount(itemCount + 1)}
            />
          </div>
        </div>
        <div className={styles["edit-status"]}>
          <button className={styles["status-button"]}>
            <img className={styles["status-image"]} src={DeleteImage} alt="" />
          </button>
          <button className={styles["status-button"]}>
            <img className={styles["status-image"]} src={UpdateImage} alt="" />
          </button>
          <button className={styles["status-button"]}>
            <img className={styles["status-image"]} src={PauseImage} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
