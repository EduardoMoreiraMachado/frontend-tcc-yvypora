import styles from "./styles.module.css";

export const ProductCategorySelect = ({ onClick }) => {
  return (
    <div className={styles["product-category-select-container"]}>
      <button className={styles["category-select"]} id="all" onClick={onClick}>
        Todos
      </button>
      <button
        className={styles["category-select"]}
        id="discount"
        onClick={onClick}
      >
        Em desconto
      </button>
      <button
        className={styles["category-select"]}
        id="close"
        onClick={onClick}
      >
        Perto de você
      </button>
    </div>
  );
};
