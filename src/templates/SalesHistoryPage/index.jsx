import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { HistoryCard } from '../../components/HistoryCard';
import { useEffect, useState } from 'react';
import ReportsFetch from '../../services/api/fetchs/marketer/ReportsFetch';
import Loading from '../../components/Loading';
export const PurchasesHistoricPage = () => {
  const [historic, setHistoric] = useState([]);

  useEffect(() => {
    ReportsFetch.getSaleHistoric().then((data) => {
      setHistoric(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      {!historic ? (
        <div style={{ width: '100vw', height: '100vh' }}>
          <Loading />
        </div>
      ) : (
        <div className={styles['purchases-historic-page-container']}>
          <Header
            user={{
              picture_uri:
                'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png',
            }}
          />
          <Title text='Histórico de vendas' />
          <div className={styles['purchase-historic-content']}>
            <NavBar />
            <div className={styles['historic-cards']}>
              {historic.map(
                ({ id, updated_at, costumer, products_in_shopping_list }) => {
                  const products = products_in_shopping_list.map((data) => {
                    return {
                      id: data.product.id,
                      productName: data.product.name,
                      productImg: data.product.image_of_product[0].image.uri,
                      productUnit: data.product.type_of_price.name,
                      price: data.product.price,
                      productQnt: data.amount,
                    };
                  });
                  const date = new Date(updated_at);
                  const yyyy = date.getFullYear();
                  let mm = date.getMonth() + 1; // Months start at 0!
                  let dd = date.getDate();

                  if (dd < 10) dd = '0' + dd;
                  if (mm < 10) mm = '0' + mm;

                  const dateFormatted = dd + '/' + mm + '/' + yyyy;

                  console.log(products);

                  return (
                    <HistoryCard
                      key={id}
                      fairImg={costumer.picture_uri}
                      tentName={`VENDA -#${id}`}
                      fairName={costumer.name}
                      purchaseDate={dateFormatted}
                      listOfProducts={products}
                    />
                  );
                }
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
export default PurchasesHistoricPage;
