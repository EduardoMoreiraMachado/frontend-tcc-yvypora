import styles from './styles.module.css';

import { useState } from 'react';

export const ToggleSwitchWithoutInput = ({ checkedValue , setState }) => {

  // verificar se o checkbox está ativado
  const handleCheckboxChange = (event) => {
    console.log(event.target.checked);
    setState(event.target.checked);
    // setState(event.target.checked);
  };

  return (
    <div className={styles['toggle-switch-container']}>
      <label className={styles['switch']}>
        <input
          type='checkbox'
          checked={checkedValue}
          onChange={handleCheckboxChange}
        />
        <span className={styles['slider'] + ' ' + styles['round']}></span>
      </label>
    </div>
  );
};
