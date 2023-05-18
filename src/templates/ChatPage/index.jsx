import styles from './styles.module.css';

import React, { useState } from 'react';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { MessageList } from '../../components/MessageList';
import { MessageInput } from '../../components/MessageInput';

export const ChatPage = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage) => {
      setMessages([...messages, newMessage]);
    };

    return(
        <div className={styles['chat-page-container']}>
            <Header user={{ picture_uri: '' }} useMargin={false} />
            <div className={styles['chat-page-content']}>
                <div className={styles['delivery-man-info']}>
                    <div className={styles['chat-user-image']} style={{backgroundImage: `url('https://teoriageek.com.br/wp-content/uploads/2021/02/William-Defoe.jpg')`}}></div>
                    <h1>William Dafoe</h1>
                </div>
                <MessageList messages={messages} sendOrReceived='received'/>
                <MessageInput addMessage={addMessage} />
            </div>
            <Footer useMargin={false} />
        </div>
    )
}

export default ChatPage
