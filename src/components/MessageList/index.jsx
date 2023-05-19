import styles from './styles.module.css'

import React, { useEffect, useRef } from 'react';

export const MessageList = ({ messages }) => {
    const messageListRef = useRef(null);

    useEffect(() => {
      // Mantém o scroll na parte inferior
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className={styles['message-list-container']}>
            <ul className={styles['message-list']} ref={messageListRef} style={{ height: '100%', overflowY: 'auto'}}>
            {messages.map((message, index) => (
                <div className={styles['message-box']} id={styles[message.sender !== 'user' ? 'received' : 'send']}>
                    <li key={index} className={styles['message-item']}>{message.content}</li>
                </div>
            ))}
            </ul>
        </div>
    );
};
