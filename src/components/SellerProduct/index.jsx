import { useEffect, useState } from 'react';

import styles from './styles.module.css';

import DeleteImage from '../../imgs/delete_icon.svg';
import UpdateImage from '../../imgs/update_icon.svg';
import PauseImage from '../../imgs/pause_icon.svg';

import { VscDebugStart, VscDebugPause } from 'react-icons/vsc';

import { useNavigate } from 'react-router-dom';
import {
  deleteProduct,
  disableProduct,
  enableProduct,
  updateAvailableQuantity,
} from '../../services/api/fetchs/marketer/productFetch';
import { ToggleSwitchWithoutInput } from '../ToggleSwitchWithoutInput';
import { notify } from '../../utils/notify';

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
  const [showPopUp, setShowPopUp] = useState(false);
  const [exclude, setExclude] = useState(false);
  const [update, setUpdate] = useState(false);

  const priceProcessed = price.toString().replace(/\./g, ',');

  const disable = async () => {
    await disableProduct({ id });
    setIsEnable(false);
  };

  const enable = async () => {
    await enableProduct({ id });
    setIsEnable(true);
  };

  const handleExcludeClick = () => {
    setExclude(true);
  }

  const handleUpdateClick = () => {
    setUpdate(true);
  }

  const handlePopUpClick = () => {
    setShowPopUp(true)
  }

  useEffect(() => {
    updateAvailableQuantity(id, itemCount)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, [itemCount]);

  return (
    <div className={styles['seller-product-container']}>
      <div className={styles['product-data']}>
        <h1 className={styles['name']}>{name}</h1>

        <div className={styles['data-containers']}>
          <div className={styles['product-visual']}>
            <div
              className={styles['image']}
              style={{ backgroundImage: `url(${imgUrl})` }}
              alt=''
            ></div>
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
          <button className={styles['status-button']} onClick={handleExcludeClick}>
            <img className={styles['status-image']} src={DeleteImage} alt='' />
          </button>
          {/* <button
            className={styles['status-button']}
            onClick={() => {
              navigate('/product/edit', {
                state: {
                  product: id,
                },
              });
            }}
          > */}
          <button className={styles['status-button']} onClick={handleUpdateClick}>
            <img className={styles['status-image']} src={UpdateImage} alt='' />
          </button>
          <button
            className={styles['status-button']}
            onClick={async (event) => {
              event.preventDefault();
              if (isEnable) { 
                setShowPopUp(true)
                
              }
              else await enable();
            }}
          >
            <ToggleSwitchWithoutInput
              checkedValue={isEnable}
              setState={setIsEnable}
            />
          </button>
        </div>
      </div>
      {exclude && (
        <div className={styles['edit-seller-product-card']}>
            <div className={styles['edit-seller-content']}>
              <h1>Gostaria de remover o produto {name}?</h1>
              <div className={styles['edit-seller-options']}>
                <span
                  id={styles['edit']}
                  onClick={async () => {
                    try {
                      await deleteProduct(id)
                    } catch (e) {
                      notify("error", "Não foi possível excluir o produto!")
                    }
                  }
                }
                >
                  Remover
                </span>
                <span
                  id={styles['cancel']}
                  onClick={() => {setExclude(false)}}
                >
                  Cancelar
                </span>
              </div>
            </div>
          </div>
      )}
      {update && (
        <div className={styles['edit-seller-product-card']}>
            <div className={styles['edit-seller-content']}>
              <h1>Gostaria de editar o produto {name}?</h1>
              <div className={styles['edit-seller-options']}>
                <span
                  id={styles['edit']}
                  onClick={() => {
                    navigate('/product/edit', {
                      state: {
                        product: id,
                      },
                    });
                  }}
                >
                  Editar
                </span>
                <span
                  id={styles['cancel']}
                  onClick={() => {setUpdate(false)}}
                >
                  Cancelar
                </span>
              </div>
            </div>
          </div>
      )}
      {showPopUp && (
        <div className={styles['edit-seller-product-card']}>
            <div className={styles['edit-seller-content']}>
              <h1>Gostaria de desabilitar o produto {name}?</h1>
              <div className={styles['edit-seller-options']}>
                <span
                  id={styles['edit']}
                  onClick={async () => {
                    await disable()
                    setShowPopUp(false)
                    
                  }}
                >
                  Desabilitar
                </span>
                <span
                  id={styles['cancel']}
                  onClick={() => { {
                    setShowPopUp(false)
                  }}}
                >
                  Cancelar
                </span>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};
