import styles from './styles.module.css';
import IconStar from '../../imgs/icon_star.svg';
import IconWork from '../../imgs/clock.svg';
import IconCalendar from '../../imgs/calendartick.svg';
import IconFairmen from '../../imgs/icon_feirante.svg';

import { NavigationType } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const FairNearCard = ({
  title,
  img,
  note,
  dayWorkText,
  hourWorkText,
  fairmanQnt,
}) => {
  const [qnt, setQnt] = useState('');
  const [registered, setRegistered] = useState('');

  useEffect(() => {
    if (fairmanQnt > 1) {
      setQnt('feirantes');
      setRegistered('cadastrados')
    } else {
      setQnt('feirante');
      setRegistered('cadastrado')
    }
  }, []);

  return (
    <div className={styles['main-card']}>
      <div className={styles['card-container']}>
        <div
          className={styles['img-card']}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className={styles['content-container']}>
          <div className={styles['header-card']}>
            <h2>{title}</h2>
            <div className={styles['note-container']}>
              <img src={IconStar} alt='' />
              <p>{note}</p>
            </div>
          </div>
          <div className={styles['containers']}>
            <img src={IconWork} alt='' />
            <p>{dayWorkText}</p>
          </div>
          <div className={styles['containers']}>
            <img src={IconCalendar} alt='' />
            <p>{hourWorkText}</p>
          </div>
          <div className={styles['containers']}>
            <img src={IconFairmen} alt='' />
            <p>
              Aprox. {fairmanQnt} {qnt} {registered} no yvy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairNearCard;
