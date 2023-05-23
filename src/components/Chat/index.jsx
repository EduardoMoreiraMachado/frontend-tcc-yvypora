import styles from './styles.module.css';

import { AiFillCloseCircle } from 'react-icons/ai'
import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MessageList } from '../../components/MessageList';
import { MessageInput } from '../../components/MessageInput';
import { socket } from '../../services/api/websocket';
import { motion } from 'framer-motion';

export const Chat = () => {
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
      <motion.div 

        initial={{ y: 300 }}
        animate={{ y: 0, transition: {
          duration: 0.4,
        } }}

        className={styles['chat-page-content']}>
        <div className={styles['delivery-man-info']}>
          <div
            className={styles['chat-user-image']}
            style={{
              backgroundImage: `url('https://teoriageek.com.br/wp-content/uploads/2021/02/William-Defoe.jpg')`,
            }}
          ></div>
          <h1>William Dafoe</h1>
          <AiFillCloseCircle />
        </div>
        <MessageList messages={messages} />
        <MessageInput addMessage={addMessage} />
      </motion.div>
  );
};


export default Chat;

