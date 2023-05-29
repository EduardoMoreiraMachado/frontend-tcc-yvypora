import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { NavBar } from '../../components/NavBar';
import { FairNearCard } from '../../components/FairNearCard';
import { Maps } from '../../components/Maps';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { listByCloseFairs } from '../../services/api/fetchs/costumer/fairs';

import MapIcon from '../../imgs/map_icon.png'
import ItensList from '../../imgs/itens_list.png'

export const NearbyFairs = () => {
  const [fairs, setFairs] = useState([]);
  const [location, setLocation] = useState(null);
  const [buttonText, setButtonText] = useState('Exibir mapa');

  const handleMapClick = () => {
    setButtonText('Exibir feiras')
  }

  const handleFairsClick = () => {
    setButtonText('Exibir mapa')
  }

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      localStorage.setItem('location', JSON.stringify(location));
    }
  }, [location]);

  useEffect(() => {
    if (location && fairs.length === 0)
      listByCloseFairs(location)
        .then((data) => {
          setFairs(data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [location, fairs]);

  const mapsMarkersLocations = fairs.map(({ latitude, longitude }) => {
    return { lat: latitude, lng: longitude };
  });

  return (
    <div className={styles['nearby-fairs-container']}>
      <Header 
        user={JSON.parse(localStorage.getItem('user-details'))} 
        useMargin={buttonText === 'Exibir mapa' ? true : false}
      />
      {buttonText === 'Exibir mapa' ? 
        <Title text='Feiras próximas' />
      :
        ''
      }
      <div className={styles['nearby-fairs-content']}>
        <div className={styles['nav-bar']}>
          <NavBar />
        </div>
        <div className={styles['fairs']}>
          {buttonText === 'Exibir mapa' ? 
            <div className={styles['cards']}>
              {fairs.map((fair) => {
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
                  <FairNearCard
                    title={fair.name}
                    img={
                      'https://osasco.sp.gov.br/wp-content/uploads/2019/12/feira-livre.jpeg'
                    }
                    note={fair.review}
                    dayWorkText={fair.fair_date_hour_of_work.map(
                      ({ dates }) => dates.day_of_week.abbr + ' '
                    )}
                    hourWorkText={openTime + ' - ' + closeTime}
                    fairmanQnt={fair.marketer_count}
                  />
                );
              })}
            </div>
            :
            <div className={styles['map-container']}>
              <Maps locations={mapsMarkersLocations} />
            </div>
          }
        </div>
        {buttonText === 'Exibir mapa' ? 
          <div className={styles['button-container']}>
            <button className={styles['page-content-button']} onClick={handleMapClick}>
              {buttonText}
              <img className={styles['button-image']} src={MapIcon} alt=''/>
            </button>
          </div>
        :
          <div className={styles['button-container']}>
            <button className={styles['page-content-button']} onClick={handleFairsClick}>
              {buttonText}
              <img className={styles['button-image']} src={ItensList} alt=''/>
            </button>
          </div>
        }
      </div>
      <Footer 
        useMargin={buttonText === 'Exibir mapa' ? true : false}
      />
    </div>
  );
};

export default NearbyFairs;
