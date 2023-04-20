import styles from "./styles.module.css";

import { useState } from "react";

function calculateResult(num1, num2) {
  const result = num1 * num2;
  const updatedResult = result.toString().replace(/\./g, ",");
  return updatedResult;
}

export const ShoppingCartItem = ({ name, imgUrl, unit, price }) => {
  const [itemCount, setItemCount] = useState(1);
  const [deleteProduct, setDeleteProduct] = useState(false);

  const resultValue = calculateResult(price, itemCount);

  if (deleteProduct === false) {
    return (
      <div className={styles["shopping-cart-item-container"]}>
        {/* <input className='item-check' type='checkbox'/> */}
        <div className={styles["item-info"]}>
          <div className={styles["item-image"]}>
            <h1 className={styles["name"]}>{name}</h1>
            <div
              className={styles["product-cart-image"]}
              style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
          </div>
          <div className={styles["item-count"]}>
            <div className={styles["total"]}>
              <h1 className={styles["unit"]}>{unit} unidade</h1>
              <span className={styles["price-card"]}>R$ {resultValue}</span>
            </div>
            <div className={styles["amount"]}>
              <button
                className={"sub-button"}
                onClick={() => {
                  itemCount > 0 && setItemCount(itemCount - 1);
                }}
              />
              <h1>{itemCount}</h1>
              <button
                className="add-button"
                onClick={() => setItemCount(itemCount + 1)}
              />
            </div>
          </div>
        </div>
        {itemCount === 0 && (
          <div className={styles["delete-cart-product-card"]}>
            <div className={styles["delete-cart-content"]}>
              <h1>Gostaria de remover o produto {name}?</h1>
              <div className={styles["delete-cart-options"]}>
                <span
                  id={styles["delete"]}
                  onClick={() => setDeleteProduct(true)}
                >
                  Remover
                </span>
                <span
                  id={styles["cancel"]}
                  onClick={() => {
                    setItemCount(1);
                  }}
                >
                  Cancelar
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default ShoppingCartItem;
