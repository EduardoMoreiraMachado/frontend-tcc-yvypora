import { useEffect, useState } from 'react';
import { ToggleSwitchWithoutInput } from '../ToggleSwitchWithoutInput';
import MarketerFairFetch from '../../services/api/fetchs/marketer/fair';
import styles from './styles.module.css';

export const Fair = ({ id, imgUrl, name, days, hours }) => {
  const [associated, setAssociated] = useState(true);

  useEffect(() => {
    if (associated) MarketerFairFetch.associate(id).then(() => {});
    else MarketerFairFetch.dissociate(id).then(() => {});
  }, [associated, id]);

  return (
    <div className={styles['container']}>
      <ToggleSwitchWithoutInput
        checkedValue={associated}
        setState={setAssociated}
      />
      <div
        className={`${styles[`fair-container`]} ${
          styles[`${associated ? 'visible' : 'hidden'}`]
        }`}
      >
        <div
          className={styles['fair-image']}
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className={styles['fair-info']}>
          <span className={styles['name']}>{name}</span>
          <div className={styles['data-info']}>
            <div className={styles['data']}>
              <h1 className={styles['data-type']}>Dias:</h1>
              <h1 className={styles['data-text']} id={styles['days']}>
                {days}
              </h1>
            </div>
            <div className={styles['data']}>
              <h1 className={styles['data-type']}>Horário de funcionamento:</h1>
              <h1 className={styles['data-text']}>{hours}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
