import styles from './styles.module.css';

import PurchaseFetch from '../../services/api/fetchs/costumer/purchase.js';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BoughtItem } from '../../components/BoughtItem';
import { PrevButton } from '../../components/PrevButton';
import { NextButton } from '../../components/NextButton';
import { GreenButton } from '../../components/GreenButton';
import { WhiteButton } from '../../components/WhiteButton';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CostumerFetch from '../../services/api/fetchs/costumer/costumer.js';
import { FaLeaf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../utils/cart';

export const PaymentPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [user, _] = useState(JSON.parse(localStorage.getItem('user-details')));
  const [previewCart, setPreviewCart] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(19.0);

  const [allAddresses, setAllAddresses] = useState(null);
  const [showAllAddress, setShowAllAddress] = useState(false);

  const total = subtotal + deliveryFee;

  const [address, setAdress] = useState(null);
  const [size, setSize] = useState(0);
  const navigation = useNavigate();

  const getFormattedValue = (value) =>
    value.toFixed(2).toString().replace('.', ',');
  const getMainAddress = async (user) => {
    const costumer_addresses = await CostumerFetch.listAddress();
    setAllAddresses(costumer_addresses);
    const main = costumer_addresses?.find(({ address }) => {
      return address.default;
    });

    return main.address;
  };

  const sanitize = () => {
    for(let i=0; i<100; i++) {
      const item = localStorage.getItem(`deleted-${i}`)
      if (item) {
        removeFromCart(i)
        localStorage.removeItem(`deleted-${i}`) 
      }
      
    }
  }

  useEffect(() => {
    const { state } = location;
    const { previewCart: lastData, total: lastTotal } = state;
    getSanitizePreviewCart(lastData);
    setPreviewCart(lastData);
    setSubtotal(lastTotal);
    console.log(lastData);
  }, []);

  const getSanitizePreviewCart = (previewCart) => {
    Object.entries(previewCart).map(([_s, products]) => {
      const _products = products.filter(
        ({ selectedQuantity }) => selectedQuantity > 0
      );
      if (_products.length === 0) {
        delete previewCart[_s];
      } else {
        previewCart[_s] = _products;
      }
    });
  };

  useEffect(() => {
    const fetch = async () => {
      setAdress(await getMainAddress(user));
    };
    fetch().then();
  }, [user]);

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handlePayment = async (event) => {
    setIsLoading(true);
    sanitize();
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('user-details'));
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    const products = []
    
    
    cart.products.forEach(({ id, selectedQuantity }) => {
      products.push({ id, amount: selectedQuantity });
    })

    console.log(products)
    
    const res_products = products.filter(({ amount }) => {
      return amount > 0
    })

    const purchase = {
      costumer_address_id: user.costumer_addresses[0].id,
      products: res_products, 
      freight: 19.99,
    };

    const stripePaymentLink = await PurchaseFetch.createPurchase(purchase);

    setIsLoading(false);
    window.location.href = stripePaymentLink;
  };

  const changeAddress = (event) => {
    event.preventDefault();
    setShowAllAddress(true);
  };

  const handleUseAddress = (id) => {};

  const handleCancel = () => {
    navigation('/cart');
  };

  return (
    <div className={styles['payment-page-container']}>
      <Header user={user} />
      <div className={styles['payment-content']}>
        <div className={styles['itens-info']}>
          <div className={styles['address-card']}>
            {showAllAddress ? (
              allAddresses.map(({ address }) => {
                return (
                  <div
                    tabIndex={1}
                    className={`${styles['clicable']}`}
                    onClick={() => {
                      handleUseAddress(address.id);
                    }}
                  >
                    <h1>{address?.type?.name}</h1>
                    <p>
                      {address?.logradouro} nº{address?.number},{' '}
                      {address?.uf?.name}, {address?.city?.name}, Brasil
                    </p>
                  </div>
                );
              })
            ) : (
              <div>
                <div className={styles['card-header']}>
                  <h1>Endereço</h1>
                  <a href='checkout' onClick={changeAddress}>
                    Mudar
                  </a>
                </div>
                <div className={styles['card-main']}>
                  <h1>{address?.type?.name}</h1>
                  <p>
                    {address?.logradouro} nº{address?.number},{' '}
                    {address?.uf?.name}, {address?.city?.name}, Brasil
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className={styles['historic']}>
            {Object.entries(previewCart ? previewCart : {}).map(([name, purchase]) => {
              const date = new Date();
              return (
                <>
                  <div className={styles['purchase']}>
                    <div className={styles['main-purchase-info']}>
                      {
                        <>
                          <div
                            className={styles['purchase-image']}
                            style={{
                              backgroundImage: `url('${purchase[0].fairPicture}')`,
                            }}></div>
                          <div className={styles['purchase-info']}>
                            <h1>{name}</h1>
                            <h2>{purchase[0].fairName}</h2>
                            {
                              <span>
                                Data: {date.getDate()}/{date.getMonth()}/
                                {date.getFullYear()}
                              </span>
                            }
                          </div>
                        </>
                      }
                    </div>
                    <div className={styles['purchase-products']} ref={carousel}>
                      {purchase.map((product) => (
                            <BoughtItem
                              id={product.id}
                              name={product.name}
                              imgUrl={product.picture}
                              unit={`${product.quantity} unidade`}
                              price={`R$ ${product.price}`}
                              qnt={product.selectedQuantity}
                            />
                          ))
                      }
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className={styles['payment-info']}>
          <div className={styles['payment-texts']}>
            <span>
              Subtotal: <h2>R$ {getFormattedValue(subtotal)}</h2>
            </span>
            <span>
              Taxa de entrega: <h2>R$ {getFormattedValue(deliveryFee)}</h2>
            </span>
            <p>
              Total: <h1>R$ {getFormattedValue(total)}</h1>
            </p>
          </div>
          <div className={styles['confirm-buttons']}>
            <GreenButton
              text='Confirmar'
              onClick={handlePayment}
              isLoading={isLoading}
            />
            <WhiteButton text='Cancelar' onClick={handleCancel} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
