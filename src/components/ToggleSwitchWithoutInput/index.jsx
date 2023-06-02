import styles from './styles.module.css';

import { useState } from 'react';

export const ToggleSwitchWithoutInput = ({ checkedValue , setState, useShadow }) => {
  // verificar se o checkbox está ativado
  const handleCheckboxChange = (event) => {
    console.log(event.target.checked);
    setState(event.target.checked);
    // setState(event.target.checked);
  };

  return (
    <div className={styles['toggle-switch-container']}>
      <label className={styles['switch']} style={useShadow ? {boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'} : {boxShadow: 'none'}}>
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
