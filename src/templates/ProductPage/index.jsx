import styles from './styles.module.css';

import { SignHeader } from '../../components/SignHeader';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { RatingStarsStatic } from '../../components/RatingStarsStatic';

import StarsIconTest from '../../imgs/stars_icon_test.svg';
import AddCartIcon from '../../imgs/add_cart_icon.svg';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { getProduct } from '../../services/api/fetchs/costumer/products';
import { addProduct } from '../../utils/cart';

import { calculateResult } from '../../utils/calcFunctions';

export const ProductPage = () => {
  const [user, _setUser] = useState(
    JSON.parse(localStorage.getItem('user-details'))
  );
  const [cart, _setCart] = useState(JSON.parse(sessionStorage.getItem('cart')));

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [itemCount, setItemCount] = useState(1);
  const result = calculateResult(
    data?.discount ? data?.price - data?.discount / 100 : data?.price,
    itemCount
  );

  useEffect(() => {
    getProduct(id).then(({ data }) => {
      setData(data);
    });
  }, [id]);

  const reviewProcessed = data?.review.toFixed(1);

  const MainPage = () => (
    <div className={styles['product-page-container']}>
      {user ? <Header user={user} /> : <SignHeader />}
      <NavBar />

      <div className={styles['product-containers']}>
        <div className={styles['product-info']}>
          <div className={styles['product-main']}>
            <div
              className={styles['image-container']}
              style={{
                backgroundImage: `url("${data.image_of_product[0].image.uri}")`,
              }}
            ></div>
            <div className={styles['texts']}>
              <h1 className={styles['title']}>{data.name}</h1>
              <div className={styles['review']}>
                {/* <img className={styles['stars']} src={StarsIconTest} alt='' /> */}
                <div className={'rotate'}>
                <RatingStarsStatic reviewValue={data.review} />
                </div>
                <h2 className={styles['grade']}>{reviewProcessed}</h2>
                <div className={styles['grade-info']}>
                  {/* <h2 className={styles["review-count"]}>41 avaliações</h2> */}
                  <h2 className={styles['order-count']}>
                    {data.order_count} pedidos
                  </h2>
                </div>
              </div>
              <span className={styles['user-name']}>{data.marketer.name}</span>

              <div className={styles['price-result']}>
                <h2 className={styles['unit']}>
                  {data.available_quantity} {data.type_of_price.name}
                </h2>
                <div className={styles['price-amount']}>
                  <h1 className={styles['price']}>R$ {result}</h1>
                  <div className={'amount'}>
                    <button
                      className={'sub-button'}
                      onClick={() => {
                        itemCount > 0 && setItemCount(itemCount - 1);
                      }}
                    />
                    <h1 className={styles['number']}>{itemCount}</h1>
                    <button
                      className={'add-button'}
                      onClick={() => setItemCount(itemCount + 1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['product-footer']}>
            <div className={styles['description']}>
              <h1 className={styles['description-title']}>Descrição</h1>
              <h2 className={styles['description-text']}>{data.description}</h2>
            </div>
            <button
              className={styles['add-cart-button']}
              onClick={() =>
                addProduct({
                  id: data.id,
                  name: data.name,
                  picture: data.image_of_product[0].image.uri,
                  price: data.discount
                    ? data.price - data.discount / 100
                    : data.price,
                  selectedQuantity: itemCount,
                  quantity: data.available_quantity,
                  fairName: data.marketer.tent_name,
                  fairPicture: data.marketer.picture_uri,
                  marketerId: data.marketer.id,
                  marketerName: data.marketer.name,
                })
              }
            >
              <img src={AddCartIcon} alt='' />
              <span>Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <>
      {data ? (
        <MainPage />
      ) : (
        <div
          className='center-center'
          style={{ width: '100vw', height: '100vh' }}
        >
          <Loading />
        </div>
      )}
    </>
  );
};

export default ProductPage;
