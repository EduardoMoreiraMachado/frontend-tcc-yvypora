import styles from './styles.module.css';

import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MessageList } from '../../components/MessageList';
import { MessageInput } from '../../components/MessageInput';
import { socket } from '../../services/api/websocket';
export const ChatPage = () => {
  const [to, setTo] = useState({
    id: 0,
    name: 'Entregador x',
    photo: 'teste',
  });
  const [user, _] = useState(JSON.parse(localStorage.getItem('user-details')));
  const [messages, setMessages] = useState([
    {
      content: 'teste',
      sender: 'user',
    },
    {
      content: 'teste 2',
      sender: to.name,
    },
  ]);

  const addMessage = (content) => {
    sendMessageIOSocket({
      content,
      timestamp: new Date().toISOString(),

      from: user.id,
      to: to.id,
    });

    setMessages([...messages, { content, sender: 'user' }]);
  };

  useEffect(() => {
    socket.on('chat_message', async (data) => {
      const { content } = data;
      setMessages([...messages, { content, sender: to.name }]);
    });
    return () => {
      socket.off('chat_message');
    };
  }, [messages]);

  const sendMessageIOSocket = ({ content, from, to, timestamp }) => {
    socket.emit('chat_message', { content, from, to, timestamp });
  };

  return (
    <div className={styles['chat-page-container']}>
      <Header user={user} useMargin={false} />
      <div className={styles['chat-page-content']}>
        <div className={styles['delivery-man-info']}>
          <div
            className={styles['chat-user-image']}
            style={{
              backgroundImage: `url('https://teoriageek.com.br/wp-content/uploads/2021/02/William-Defoe.jpg')`,
            }}
          ></div>
          <h1>William Dafoe</h1>
        </div>
        <MessageList messages={messages} />
        <MessageInput addMessage={addMessage} />
      </div>
      <Footer useMargin={false} />
    </div>
  );
};

export default ChatPage;
