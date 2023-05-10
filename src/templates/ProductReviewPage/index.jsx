import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { RatingStars } from '../../components/RatingStars';
import { GreenButton } from '../../components/GreenButton';
import { useEffect, useState } from 'react';
import { groupByMarketer } from '../../utils/groupBy';
import { getPurchase } from '../../utils/fetchs/Costumer/purchase';
import { FaSpinner } from 'react-icons/fa';
import ReviewFetch from '../../utils/fetchs/Costumer/review';

const ProductReviewPage = () => {
  const [cart, setCart] = useState(null);
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [ratingProducts, setRatingProducts] = useState(0);
  const [ratingDeliveryman, setRatingDeliveryman] = useState(0);

  useEffect(() => {
    const currentTravelStoraged = JSON.parse(
      localStorage.getItem('current_travel')
    );
    setOrder(currentTravelStoraged.order);
    getPurchase(currentTravelStoraged.order.id).then((data) => {
      setCart(data);
    });
  }, []);

  const handleSendButtonClick = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await ReviewFetch.deliveryman({
        review: {
          deliverymanId: order.deliverymanId,
          avaliation: ratingDeliveryman,
        },
      });

      await ReviewFetch.purchase({
        reviews: order.shopping_list.products_in_shopping_list.map(
          ({ productId }) => {
            return { productId, avaliation: ratingProducts };
          }
        ),
      });
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <div className={styles['product-review-page-container']}>
      <Header user={{ picture_uri: '' }} />
      <Title text='Compra #30495' />
      <div className={styles['product-review-content']}>
        <div className={styles['review-containers']}>
          <h1>Avalie esta compra</h1>
          <div className={styles['entrega-review']}>
            <p>Relate aqui sua experiência com essa entrega</p>
            <textarea
              cols='30'
              rows='10'
              maxLength='500'
              placeholder='Exemplo: Entrega ultra veloz'
              id={styles['entrega']}
            />
          </div>
          <div className={styles['produtos-review']}>
            <p>Relate aqui sua experiência com os produtos comprados</p>
            <div id='review'>
              {Object.entries(cart ? cart : {})?.map(([name, products]) => {
                return (
                  <>
                    <div className={styles['produtos-vendedor']}>
                      <div
                        className={styles['vendedor-photo']}
                        style={{
                          backgroundImage: `url(${products[0].product.marketer.picture_uri})`,
                        }}
                      ></div>
                      <span>
                        {products[0].product.marketer.name} <br></br>
                        {products.map((data) => (
                          <span>
                            {data.amount}x {data.product.name} <br></br>
                          </span>
                        ))}
                      </span>
                    </div>
                    <textarea
                      cols='30'
                      rows='10'
                      maxLength='500'
                      placeholder='Exemplo: Produto de ótima qualidade'
                      id={styles['produto']}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles['stars-container']}>
          <div className={styles['entrega-stars']}>
            <h1>Nota do entregador</h1>
            <RatingStars setExternalRating={setRatingDeliveryman} key={1} />
          </div>
          <div className={styles['produtos-stars']}>
            <h1>Nota dos produtos</h1>
            <RatingStars key={2} setExternalRating={setRatingProducts} />
            <p>
              Caso queira avaliar cada item de sua compra individialmente{' '}
              <a href='https://www.figma.com/file/fB4sbEBD7WK4YvojWURH27/yvypora?node-id=138-908&t=EFDptxKA7JqO3ogY-0'>
                clique aqui
              </a>
            </p>
          </div>
          <GreenButton
            text={isLoading ? <FaSpinner className='spin' /> : 'Enviar'}
            onClick={handleSendButtonClick}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductReviewPage;

// export interface IPurchaseReview {
//   reviews: { productId: number, avaliation: number }[];
// }
// export interface IDeliverymanReview {
//   review: { deliverymanId: number, avaliation: number };
// }
