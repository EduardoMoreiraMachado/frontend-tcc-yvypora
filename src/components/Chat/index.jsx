import styles from './styles.module.css';

import { AiFillCloseCircle } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MessageList } from '../../components/MessageList';
import { MessageInput } from '../../components/MessageInput';
import { socket } from '../../services/api/websocket';
import { motion, useAnimation } from 'framer-motion';
import { getListOfMessages } from '../../services/api/fetchs/chat';

const popupVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0 },
};

export const Chat = ({ isChatOpen, setChatOpen, from, _to }) => {
  const controls = useAnimation();  
  const [messages, setMessages] = useState([

  ]);

  useEffect(() => {
    controls.start(isChatOpen ? 'visible' : 'hidden');
  }, [isChatOpen]);

  const [to, setTo] = useState({
    id: 0,
    name: 'Entregador x',
    photo: 'teste',
  });

  const [user, _] = useState(JSON.parse(localStorage.getItem('user-details')));
  
  useEffect(() => {
    const fetch = async () => {
      const res = await getListOfMessages(from , _to)
      setMessages(res)
    }  
    fetch().then()
  }, [])


  const addMessage = (content) => {
    sendMessageIOSocket({
      content,
      timestamp: new Date().toISOString(),
      fromName: user.name,
      from: user.id,
      to: to.id,
      to: _to
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
  }, [messages, to.name]);

  const sendMessageIOSocket = ({ content, from, to, timestamp }) => {
    socket.emit('send_message', { content, from, to, timestamp });
  };

  return (
    <motion.div
      variants={popupVariants}
      initial='hidden'
      animate={controls}
      className={styles['chat-page-content']}
    >
      <div className={styles['delivery-man-info']}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            className={styles['chat-user-image']}
            style={{
              backgroundImage: `url('https://teoriageek.com.br/wp-content/uploads/2021/02/William-Defoe.jpg')`,
            }}
          ></div>
          <h1
            style={{
              fontSize: '1.2rem',
              height: '20px',
            }}
          >
            William Dafoe
          </h1>
        </div>
        <AiFillCloseCircle
          className={styles['chat-close-icon']}
          onClick={() => setChatOpen(false)}
        />
      </div>
      <MessageList messages={messages} />
      <MessageInput addMessage={addMessage} />
    </motion.div>
  );
};

export default Chat;
