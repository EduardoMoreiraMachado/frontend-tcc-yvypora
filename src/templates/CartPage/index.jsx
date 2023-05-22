import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { groupByMarketer } from '../../utils/groupBy';
import PurchaseFetch from '../../services/api/fetchs/costumer/purchase';
import { useNavigate, use } from 'react-router-dom';

export const CartPage = () => {
  const navigate = useNavigate();

  const [user, _] = useState(JSON.parse(localStorage.getItem('user-details')));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [displayCart, setDisplayCart] = useState([]);

  const [total, setTotal] = useState(cart.total ? cart.total : 0);

  const processedTotal = total?.toFixed(2);
  const resultTotal = processedTotal.toString().replace(/\./g, ',');

  useEffect(() => {
    const aggroupedData = groupByMarketer(cart.products);
    setDisplayCart(aggroupedData);
  }, [cart]);

  const refresh = async () => {
    return new Promise((resolve) => {
      window.location.reload(true);
      resolve();
    });
  };

  const handleRedirect = (state) => {
    navigate('/checkout', { state }); // Perform the redirect after reloading
  };
  const handleClickToPayment = async (event) => {
    event.preventDefault();

    setCart(JSON.parse(localStorage.getItem('cart')));

    const updatedData = groupByMarketer(cart.products);

    handleRedirect({
      previewCart: updatedData,
      total: total,
    });
  };

  return (
    <div className={styles['cartpage-container']}>
      <Header user={user} />
      <Title text={'Meu Carrinho'} />
      <div className={styles['main-container-cart']}>
        <NavBar />
        <div className={styles['card-payment-container']}>
          <div className={styles['card-cart-container']}>
            <div className={styles['card-cart']}>
              <div className={styles['main-purchase-info']}>
                {Object.entries(displayCart).map(([name, purchase]) => {
                  const date = new Date();
                  return (
                    <>
                      <div
                        className={styles['purchase-image']}
                        style={{
                          backgroundImage: `url('${purchase[0].fairPicture}')`,
                        }}
                      ></div>
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
                  );
                })}
              </div>
              {Object.entries(displayCart).map(([_, purchase]) =>
                purchase.map((product) => (
                  <ShoppingCartItem
                    id={product.id}
                    name={product.name}
                    imgUrl={product.picture}
                    unit={product.quantity}
                    price={product.price}
                    itemCountProp={product.selectedQuantity}
                    setCartTotal={setTotal}
                  />
                ))
              )}
            </div>
          </div>
          <div className={styles['payment-card']}>
            <h1>Resumo do pedido</h1>
            <div className={styles['total-payment']}>
              <span>TOTAL:</span>
              <h2>R$ {resultTotal}</h2>
            </div>
            <button onClick={handleClickToPayment}>Pagar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
