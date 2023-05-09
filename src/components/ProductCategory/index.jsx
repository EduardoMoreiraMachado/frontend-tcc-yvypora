import styles from "./styles.module.css";

import FruitsCategoryIcon from "../../imgs/fruits_category_icon.png";
import VegetablesCategoryIcon from "../../imgs/vegetables_category_icon.png";
import SpicesCategoryIcon from "../../imgs/spices_category_icon.png";
import OthersCategoryIcon from "../../imgs/others_category_icon.png";

export const ProductCategory = () => {
  return (
    <div className={styles["product-category-container"]}>
      <div className={styles["category-item"]}>
        <div className={styles["category-image"]}>
          <img
            className={styles["image"]}
            src={FruitsCategoryIcon}
            alt=""
          />
        </div>
        <h1 className={styles["category-name"]}>Frutas</h1>
      </div>

      <div className={styles["category-item"]}>
        <div className={styles["category-image"]}>
          <img
            className={styles["image"]}
            src={VegetablesCategoryIcon}
            alt=""
          />
        </div>
        <h1 className={styles["category-name"]}>Vegetais</h1>
      </div>

      <div className={styles["category-item"]}>
        <div className={styles["category-image"]}>
          <img
            className={styles["image"]}
            src={SpicesCategoryIcon}
            alt=""
          />
        </div>
        <h1 className={styles["category-name"]}>Especiarias</h1>
      </div>

      <div className={styles["category-item"]}>
        <div className={styles["category-image"]}>
          <img
            className={styles["image"]}
            src={OthersCategoryIcon}
            alt=""
          />
        </div>
        <h1 className={styles["category-name"]}>Outros</h1>
      </div>
    </div>
  );
};
