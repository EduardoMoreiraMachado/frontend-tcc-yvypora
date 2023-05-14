import styles from './styles.module.css';

import StarIcon from '../../imgs/star_icon.png';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  listAllProductsWithFilters,
  listProducts,
  listWithFilters,
} from '../../services/api/fetchs/costumer/products';

export const ProductsFilters = ({ categories, setListOfProducts }) => {
  const [minPrice, setMinPrice] = useState(0.0);
  const [selectedCategory, setSelectedCategory] = useState(''); // default is all
  const [stars, setStars] = useState(0);

  useEffect(() => {}, [selectedCategory]);
  useEffect(() => {
    const fetch = async () => {
      if (selectedCategory !== 'all') {
        const { data: list } = await listWithFilters(
          selectedCategory,
          stars,
          minPrice
        );
        setListOfProducts(list);
        return null;
      }
      const list = await listAllProductsWithFilters(stars, minPrice);
      setListOfProducts(list);
    };

    fetch().then();
  }, [minPrice, selectedCategory, stars, setListOfProducts]);

  const handleClickInCategory = async (event) => {
    event.preventDefault();
    const { target } = event;
    const { id: categoryId } = target;
    setSelectedCategory(categoryId);
  };

  const handleClickInStars = async (event) => {
    event.preventDefault();
    const { target } = event;
    const { id } = target;
    setStars(id);
  };

  return (
    <div className={styles['products-filters-container']}>
      <div className={styles['up-container']}>
        <div className={styles['category-filter']}>
          <h1 className={styles['filter-title']}>Categoria</h1>

          <button
            id={'all'}
            key='all'
            className={styles['category-filter-button']}
            onClick={handleClickInCategory}
          >
            <h2 id={'all'}>Todos</h2>
          </button>

          {categories.map(({ name, id }) => {
            return (
              <button
                id={id}
                onClick={handleClickInCategory}
                key={name}
                className={styles['category-filter-button']}
              >
                <h2 id={id}>{name}</h2>
              </button>
            );
          })}
        </div>
        <div className={styles['rating-filter']}>
          <h1 className={styles['filter-title']}>Avaliação</h1>
          <button
            id={0}
            className={styles['rating-filter-button']}
            onClick={handleClickInStars}
          >
            <img id={0} src={StarIcon} alt='' />
            <h2 id={0}>0 ou mais</h2>
          </button>
          <button
            id={1}
            className={styles['rating-filter-button']}
            onClick={handleClickInStars}
          >
            <img id={1} src={StarIcon} alt='' />
            <h2 id={1}>1 ou mais</h2>
          </button>
          <button
            id={2}
            className={styles['rating-filter-button']}
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt='' id={2} />
            <h2 id={2}>2 ou mais</h2>
          </button>
          <button
            id={3}
            className={styles['rating-filter-button']}
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt='' id={3} />
            <h2 id={3}>3 ou mais</h2>
          </button>
          <button
            className={styles['rating-filter-button']}
            id={4}
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt='' id={4} />
            <h2 id={3}>4 ou mais</h2>
          </button>
          <button
            className={styles['rating-filter-button']}
            id={5}
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt='' id={5} />
            <h2 id={5}>5 apenas</h2>
          </button>
        </div>
      </div>
      <div className={styles['down-container']}>
        <h1 className={styles['filter-title']}>Preço</h1>
        <div className={styles['slider-container']}>
          <input
            className={styles['less']}
            id='range'
            type='range'
            min='0'
            max='100'
            step='10'
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <h1>R$ {minPrice}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilters;
