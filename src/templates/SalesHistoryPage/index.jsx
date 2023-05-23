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
              <HistoryCard
                fairImg='https://upload.wikimedia.org/wikipedia/en/f/fb/Skyler_White_S5B.png'
                tentName='Skyler White'
                fairName='308 Negra Arroyo Lane, Albuquerque, New Mexico. 87104.'
                purchaseDate='41/13/2027'
                productName='Abóbora'
                productImg='https://img.freepik.com/free-photo/close-up-shot-fresh-pumpkins-different-shapes-sizes-perfect_181624-31370.jpg?w=2000&t=st=1681383871~exp=1681384471~hmac=3925907f5157d0f6192b61c3c1ca599433a696bddb2599bf8c69ce954fd2a457'
                productUnit='800g'
                productPrice={24.77}
                productQnt={4}
                productCount={7}
                sale={true}
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PurchasesHistoricPage;