import styles from "./style.module.css";

import FruitsCategoryIcon from "../../imgs/fruits_category_icon.png";
import VegetablesCategoryIcon from "../../imgs/vegetables_category_icon.png";
import SpicesCategoryIcon from "../../imgs/spices_category_icon.png";
import OthersCategoryIcon from "../../imgs/others_category_icon.png";

import { listCategories } from "../../utils/fetchs/common/category";
import { useEffect } from "react";
import { useState } from "react";

export const ProductCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const categories = await listCategories();
      setCategories(categories);
    };

    console.log(categories);
    fetch().then();
  }, []);

  return (
    <div className={styles["product-category-container"]}>
      {categories.map((category) => {
        return (
          <div className={styles["category-item"]} key={category.id}>
            <div className={styles["category-image"]}>
              <img
                className={styles["image"]}
                src={category.image.uri}
                alt=""
              />
            </div>
            <h1 className={styles["category-name"]}>{category.name}</h1>
          </div>
        );
      })}
    </div>
  );
};
