import { useEffect, useState } from 'react';

import styles from './styles.module.css';

import DeleteImage from '../../imgs/delete_icon.svg';
import UpdateImage from '../../imgs/update_icon.svg';
import PauseImage from '../../imgs/pause_icon.svg';

import { VscDebugStart, VscDebugPause } from 'react-icons/vsc';

import { useNavigate } from 'react-router-dom';
import {
  disableProduct,
  enableProduct,
  updateAvailableQuantity,
} from '../../utils/fetchs/Marketer/productFetch';

export const SellerProduct = ({
  id,
  name,
  imgUrl,
  unit,
  price,
  available_quantity,
  type_of_price,
  status,
}) => {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(available_quantity);
  const [isEnable, setIsEnable] = useState(status);

  const priceProcessed = price.toString().replace(/\./g, ",");

  const disable = async (event) => {
    event.preventDefault();
    await disableProduct({ id });
    setIsEnable(false);
  };

  const enable = async (event) => {
    event.preventDefault();
    await enableProduct({ id });
    setIsEnable(true);
  };
  
  useEffect(() => {
    updateAvailableQuantity(id, itemCount).then(() => {}).catch((err) => {console.log(err)})
  }, [itemCount]);

  return (
    <div className={styles['seller-product-container']}>
      <div className={styles['product-data']}>


        <h1 className={styles['name']}>{name}</h1>

        <div className={styles['data-containers']}>
          <div className={styles['product-visual']}>
            <div className={styles['image']} style={{backgroundImage: `url(${imgUrl})`}} alt=''></div>
          </div>

          <div className={styles['product-price']}>
            <h1 className={styles['unit']}>
              {unit} {type_of_price}
            </h1>
            <span className={styles['price']}>R$ {priceProcessed}</span>
          </div>
        </div>

      </div>
      <div className={styles['product-quantity']}>
        <div className={styles['number-quantity']}>
          <span className={styles['text']}>Quant. disponível</span>
          <div className={styles['amount']}>
            <button
              className={styles['sub-button']}
              onClick={() => {
                itemCount > 0 && setItemCount(itemCount - 1);
              }}
            />
            <h1 className={styles['number']}>{itemCount}</h1>
            <button
              className={styles['add-button']}
              onClick={() => setItemCount(itemCount + 1)}
            />
          </div>
        </div>
        <div className={styles['edit-status']}>
          <button className={styles['status-button']}>
            <img className={styles['status-image']} src={DeleteImage} alt='' />
          </button>
          <button
            className={styles['status-button']}
            onClick={() => {
              navigate('/product/edit', {
                state: {
                  product: id,
                },
              });
            }}
          >
            <img className={styles['status-image']} src={UpdateImage} alt='' />
          </button>
          <button
            className={styles['status-button']}
            onClick={async (event) => {
              if (isEnable) await disable(event);
              else await enable(event);
            }}
          >
            {isEnable ? (
              <VscDebugStart className={styles['status-image']} />
            ) : (
              <VscDebugPause className={styles['status-image']} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};