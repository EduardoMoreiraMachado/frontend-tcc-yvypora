import PromoImg from '../../imgs/promotion_icon.png';

import styles from './styles.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../utils/cart';

export const ShoppingItem = ({
  id,
  name,
  imgUrl,
  weight,
  price,
  promo,
  availableQuantity,
  fairName,
  fairPicture,
  marketerId,
  marketerName,
  cartId,
}) => {
  const [promoExists, setPromoExists] = useState(0);
  const [promoValue, setPromoValue] = useState(null);
  const priceProcessed = price.toString().replace(/\./g, ',');
  const oldPrice = price.toFixed(2).toString(2).replace(/\./g, ',');
  const navigation = useNavigate();

  useEffect(() => {
    if (promo) {
      // Calc price with discount
      const value = (price - price * (promo / 100))
        .toFixed(2)
        .toString()
        .replace(/\./g, ',');

      setPromoValue(value);
      setPromoExists(100);
    }
  }, []);

  const handleNextPage = () => {
    navigation(`/product/${id}`);
  };

  return (
    <div className={styles['shopping-item-container']} onClick={handleNextPage}>
      <div className={styles['item-visual']}>
        <div className={styles['header-card']}>
          <h1 className={styles['name']}>{name}</h1>
          <div
            className={styles['promotion-img']}
            style={{
              backgroundImage: `url(${PromoImg})`,
              opacity: promoExists,
            }}
          ></div>
        </div>
        <div
          className={styles['image']}
          style={{ backgroundImage: `url(${imgUrl})` }}
          alt=''
        >
          {' '}
        </div>
      </div>
      <div className={styles['item-numbers']}>
        <div className={styles['numbers']}>
          {promo && <h2 className={styles['old-price']}>R$ {oldPrice}</h2>}
          <h1 className={styles['weight']}>{weight}</h1>
          <span className={styles['price-general']}>
            R$ {promoValue ? promoValue : priceProcessed}
          </span>
        </div>
        <div className={styles['cart-icon-box']}>
          <button
            className={styles['cart-icon']}
            onClick={() => {
              console.log({
                id,
                name,
                imgUrl,
                weight,
                price,
                promo,
                availableQuantity,
                fairName,
                fairPicture,
                marketerId,
                marketerName,
                cartId,
              });
              addProduct({
                id: cartId,
                name: name,
                picture: imgUrl,
                price: promoValue ? promoValue : priceProcessed,
                selectedQuantity: 1,
                quantity: availableQuantity,
                fairName: fairName,
                fairPicture: fairPicture,
                marketerId: marketerId,
                marketerName: marketerName,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
