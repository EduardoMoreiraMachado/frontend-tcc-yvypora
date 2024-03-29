import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { GreenButton } from '../../components/GreenButton';
import { Footer } from '../../components/Footer';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CostumerFetch from '../../services/api/fetchs/costumer/costumer.js';

export const AddressPage = () => {
  const [user, _] = useState(JSON.parse(localStorage.getItem('user-details')));
  const [addresses, setAddresses] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    CostumerFetch
      .listAddress()
      .then((res) => {
        
        setAddresses(res);
      }).catch(err => console.log(err));
  }, []);

  const handleNextPage = () => {
    navigation('/profile/address/add')
  }

  return (
    <div className={styles['address-page-container']}>
      <Header user={user} />
      <Title text='Endereços' />
      <div className={styles['address-page-content']}>
        <NavBar />
        <div className={styles['address-content']}>
          <div className={styles['address-list']}>
            {addresses.map(({ address }) => {
              return (
                <div className={styles['address-card']}>
                  {address.default &&
                  <div className={styles['main-address-card']}>
                    <span>Endereço principal</span>
                  </div>
                  }
                  <div className={styles['address-info']}>
                    <h1>{address.type.name}</h1>

                    <p>
                      {address.logradouro} nº{address.number}, {address.uf.name}
                      , {address.city.name}, Brasil
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles['add-address-button']} onClick={handleNextPage}>
            <GreenButton text='Adicionar' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddressPage;
