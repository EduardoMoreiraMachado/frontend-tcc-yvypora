import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { groupByMarketer } from '../../utils/groupBy';
import { createPurchase } from '../../utils/fetchs/Costumer/purchase';

export const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [displayCart, setDisplayCart] = useState([]);

  const [total, setTotal] = useState(cart.total);

  const processedTotal = total.toFixed(2)
  const resultTotal = processedTotal.toString().replace(/\./g, ",")

  useEffect(() => {
    const aggroupedData = groupByMarketer(cart.products);
    setDisplayCart(aggroupedData);
  }, [cart]);

  const handleClickToPayment = async (event) => {
    setCart(JSON.parse(localStorage.getItem('cart')));

    const user = JSON.parse(localStorage.getItem('user-details'));

    const purchase = {
      costumer_address_id: user.costumer_addresses[0].id,
      products: cart.products.map(({ id, selectedQuantity }) => {
        return { id, amount: selectedQuantity };
      }),
      freight: 19.99,
    };

    
    const stripePaymentLink = await createPurchase(purchase);

    window.location.href = stripePaymentLink;
  };

  return (
    <div className={styles['cartpage-container']}>
      <Header user={{ picture_uri: '' }} />
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
              {Object.entries(displayCart).map(([name, purchase]) =>
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
