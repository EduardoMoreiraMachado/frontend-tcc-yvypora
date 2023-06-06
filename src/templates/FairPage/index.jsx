import styles from './styles.module.css';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { Fair } from '../../components/Fair';
import { GreenButton } from '../../components/GreenButton';
import { DataNotFound } from '../../components/DataNotFound'
import Loading from '../../components/Loading';

import { useAsync } from 'react-use';
import { useNavigate } from 'react-router-dom';
import MarketerFairFetch from '../../services/api/fetchs/marketer/fair';
import { useState } from 'react';

export const FairPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-details")));
  const [loadPage, setLoadPage] = useState(false);

  const navigation = useNavigate();
  const {
    loading,
    error,
    value: fairs,
  } = useAsync(async () => {
    const data = await MarketerFairFetch.index();
    setLoadPage(true)
    return data;
  }, []);

  const handleNextPage = (path) => {
    navigation(path);
  };

  return (
    <>
      {!loadPage ? (
        <div className={styles['loading-container']}>
          <Loading />
        </div>
      ) : (
          <div className={styles['registered-fairs-page']}>
            <Header user={user} />
            <div className={styles['fairs-content']}>
              <NavBar />
              
                
              <div className={styles['fairs-list']}>
                <Title text='Feiras' />
                {fairs?.length === 0 ? 
                  <DataNotFound text='Você ainda não inseriu alguma feira!'/>
                : 
                  <div className={styles['fairs']}>
                    {fairs?.map(({ fair }) => {
                      console.log(fair);
                      const open = new Date(
                        fair.fair_date_hour_of_work[0].dates.open_datetime
                      ).toISOString();
                      const close = new Date(
                        fair.fair_date_hour_of_work[0].dates.close_datetime
                      ).toISOString();

                      const openTime = open.match(/\d\d:\d\d/);
                      const closeTime = close.match(/\d\d:\d\d/);

                      return (
                        <Fair
                          id={fair.id}
                          imgUrl='https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png'
                          name={fair.name}
                          days={fair.fair_date_hour_of_work.map(
                            ({ dates }) => dates.day_of_week.abbr + ' '
                          )}
                          hours={`${openTime} até as ${closeTime}`}
                          key={fair.id}
                        />
                      );
                    })}
                  </div>
                }
                <div
                  id={styles['add-fair-button']}
                  onClick={() => {
                    handleNextPage('/fair/add-fair');
                  }}
                >
                  <GreenButton text='Adicionar feira' />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )}
    </>
  );
};

export default FairPage;
