import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { HistoryCard } from '../../components/HistoryCard';
import { useEffect, useState } from 'react';
import PurchaseFetch from '../../services/api/fetchs/costumer/purchase';
import Loading from '../../components/Loading';
export const PurchasesHistoricPage = () => {
  const [historic, setHistoric] = useState([]);

  useEffect(() => {
    PurchaseFetch.historic().then((data) => {
      const _data = data.map((order) => {         
        const updateAt = new Date(order.updated_at);
        const yyyy = updateAt.getFullYear();
        let mm = updateAt.getMonth() + 1; // Months start at 0!
        let dd = updateAt.getDate();
  
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
  
        const date = dd + '/' + mm + '/' + yyyy;
        const total = (order.shopping_list.total / 100).toFixed(2).toString().replace('.', ',')
        console.log("teste", order);
        let fairName = order.shopping_list.products_in_shopping_list.map(({ product }) => {
          const { marketer } = product;
          const { tent_name  } = marketer;
          console.log(tent_name);
          return tent_name
        })
        fairName = [...new Set(fairName)].join(",")

          const object = {
          total,
          pedido: `Pedido - #${order.id}`,
          date,
          fairName,
          products: order.shopping_list.products_in_shopping_list.map(({ product }) => {
            const _product = { 
              id: product.id,
              productName: product.name, 
              productImg: product.image_of_product[0].image.uri, 
              productUnit: product.type_of_price.name, 
              price: product.price,
              productQnt: product.available_quantity
              }
              return _product 
          } )
        }
        console.log(object);
        
        return object;
      })
      setHistoric(_data);
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
          <Title text='Histórico de compras' />
          <div className={styles['purchase-historic-content']}>
            <NavBar />
            <div className={styles['historic-cards']}>
              {
                historic.map((order) => {
                  return (
                    <HistoryCard
                    fairImg='https://pocosdecaldas.mg.gov.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-04-09-at-09.41.39-2-1024x768.jpeg'
                    tentName={order.pedido}
                    fairName={order.fairName}
                    purchaseDate={order.date}
                    listOfProducts={order.products}
                  />
                  )
                })
              }
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PurchasesHistoricPage;
