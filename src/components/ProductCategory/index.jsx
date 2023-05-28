import styles from './styles.module.css';

import FruitsCategoryIcon from '../../imgs/fruits_category_icon.png';
import VegetablesCategoryIcon from '../../imgs/vegetables_category_icon.png';
import SpicesCategoryIcon from '../../imgs/spices_category_icon.png';
import OthersCategoryIcon from '../../imgs/others_category_icon.png';
import { useNavigate } from 'react-router-dom';

export const ProductCategory = () => {
  const navigate = useNavigate();
  const handleClickInCategory = ({ target }) => {
    const { id: name } = target;
    console.log({ name, id: 0 });
    switch (name) {
      case 'fruits':
        navigate('/search', { state: { category: { name: 'Frutas', id: 0 } } });
        break;

      case 'vegetables':
        navigate('/search', {
          state: { category: { name: 'Vegetais', id: 1 } },
        });
        break;

      case 'spices':
        navigate('/search', {
          state: { category: { name: 'Especiarias', id: 2 } },
        });
        break;

      case 'others':
        navigate('/search', { state: { category: { name: 'Outros', id: 3 } } });
        break;

      default:
        console.log('Não foi possível redirecionar');
    }
  };
  return (
    <div className={styles['product-category-container']}>
      <div className={styles['category-item']}>
        <div className={styles['category-image']}>
          <img className={styles['image']} src={FruitsCategoryIcon} alt='' />
        </div>
        <h1
          className={styles['category-name']}
          id='fruits'
          onClick={handleClickInCategory}
        >
          Frutas
        </h1>
      </div>

      <div className={styles['category-item']}>
        <div className={styles['category-image']}>
          <img
            className={styles['image']}
            src={VegetablesCategoryIcon}
            alt=''
          />
        </div>
        <h1
          className={styles['category-name']}
          id='vegetables'
          onClick={handleClickInCategory}
        >
          Vegetais
        </h1>
      </div>

      <div className={styles['category-item']}>
        <div className={styles['category-image']}>
          <img className={styles['image']} src={SpicesCategoryIcon} alt='' />
        </div>
        <h1
          className={styles['category-name']}
          id='spices'
          onClick={handleClickInCategory}
        >
          Especiarias
        </h1>
      </div>

      <div className={styles['category-item']}>
        <div className={styles['category-image']}>
          <img className={styles['image']} src={OthersCategoryIcon} alt='' />
        </div>
        <h1
          className={styles['category-name']}
          id='others'
          onClick={handleClickInCategory}
        >
          Outros
        </h1>
      </div>
    </div>
  );
};
