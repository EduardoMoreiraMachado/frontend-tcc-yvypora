import styles from './styles.module.css';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { Fair } from '../../components/Fair';
import { GreenButton } from '../../components/GreenButton';
import { useAsync } from 'react-use';
import { getMarketerAssociatedFairs } from '../../utils/fetchs/Marketer/fairsFetch';

export const FairPage = () => {
  const {
    loading,
    error,
    value: fairs,
  } = useAsync(async () => {
    const data = await getMarketerAssociatedFairs();
    console.log(data);
    return data;
  }, []);

  return (
    <div className={styles['registered-fairs-page']}>
      <Header user={{ picture_uri: '' }} />
      <div className={styles['fairs-content']}>
        <NavBar />
        <div className={styles['fairs-list']}>
          <Title text='Feiras' />
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

              console.log(openTime, closeTime);
              return (
                <Fair
                  imgUrl='https://vidasimples.co/wp-content/uploads/2019/09/vida-simples-feira-vai-ter-feira-4.png'
                  name={fair.name}
                  days={fair.fair_date_hour_of_work.map(
                    ({ dates }) => dates.day_of_week.name + '/'
                  )}
                  hours={`${openTime} até as ${closeTime}`}
                  key={fair.id}
                />
              );
            })}
          </div>
          <div id={styles['add-fair-button']}>
            <GreenButton text='Adicionar feira' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FairPage;
