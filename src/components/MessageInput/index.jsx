import styles from './styles.module.css';

import React, { useState } from 'react';

export const MessageInput = ({ addMessage }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addMessage(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles['message-input-container']}>
      <input type="text" value={text} onChange={handleInputChange} className={styles['message-input']} placeholder='digite sua mensagem...'/>
      <button type="submit" className={styles['message-button']}></button>
    </form>
  );
};
