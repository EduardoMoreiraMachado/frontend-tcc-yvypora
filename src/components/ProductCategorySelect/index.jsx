import styles from './styles.module.css';

export const ProductCategorySelect = ({ onClick }) => {
  return (
    <div className="product-category-select-container">
      <button className="category-select" id="all" onClick={onClick}>
        Todos
      </button>
      <button className="category-select" id="discount" onClick={onClick}>
        Em desconto
      </button>
      <button className="category-select" id="close" onClick={onClick}>
        Perto de você
      </button>
    </div>
  );
};
