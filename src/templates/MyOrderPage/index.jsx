import styles from './styles.module.css';
import { useState, useEffect, useCallback } from 'react';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Footer } from '../../components/Footer';
import { RatingStarsStatic } from '../../components/RatingStarsStatic';
import { LoadScript } from '@react-google-maps/api';

import Loading from '../../components/Loading';
import Route from '../../components/RouteTester';
import { socket } from '../../services/api/websocket';
import { notify, notifyAsForm } from '../../utils/notify';
import MessageIcon from '../../imgs/message_icon.png';
import CallIcon from '../../imgs/call_icon.png';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../../components/Chat'

export const MyOrderPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-details")));
  const [order, setOrder] = useState({});
  const [showChat, setShowChat] = useState(false);

  const navigation = useNavigate();
  const [deliveryman, setDeliveryman] = useState({
    id: 0,
    name: 'teste de nome gigante mds nem da pra ler',
    picture_uri:
      'data:image/jpeg;base64,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',
  });
  const [directions, setDirections] = useState(null);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    try {
      const orderStoraged = localStorage.getItem('current_travel');
      const order = JSON.parse(orderStoraged);
      if (order) {
        setOrder(order);
        setDeliveryman(order.order.deliveryman);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    socket.on('travel_accepted', async (data) => {
      localStorage.setItem('current_travel', JSON.stringify(data));
      await notify('success', 'Entregador encontrado!');

      console.log(data);
      setOrder(data.order);
      setDeliveryman(data.deliveryman);

      window.location.reload(true);
    });
    // Cleanup the listener when component unmounts
    return () => {
      socket.off('travel_accepted');
    };
  }, []);

  useEffect(() => {
    socket.on('updated_of_order', async (data) => {
      console.log(data);
      if (data.retreat_products) {
        await notify('info', 'Produtos coletados!', 15000);
      }
    });
    return () => {
      socket.off('updated_of_order');
    };
  }, []);

  useEffect(() => {
    socket.on('order_arrived', async (data) => {
      console.log(data);
      if (data.delivered_status_for_client) {
        setFinish(true);
      }
    });
    return () => {
      socket.off('order_arrived');
    };
  }, []);


  useEffect(() => {
    if (finish) {
      notifyAsForm(
        'Entrega finalizada! O pedido foi entregue corretamente?',
        async () => {
          socket.emit('confirm_order_arrived', { order: order.order });

          navigation('/purchase/review')
        },
        () => {}
      ).then(() => {});
    }
  }, [finish, order, navigation]);

  return (
    <div
      className={
        finish
          ? `${styles['my-order-page-container']} ${styles['order-finish']}`
          : `${styles['my-order-page-container']}`
      }
    >
      <Header user={user} useMargin={false} />
      <div className={styles['my-order-data-container']}>
        {/* <Title text='Meu pedido' /> */}
        <h1 className={styles['page-title']}>Meu pedido</h1>
        <div className={styles['my-order-content']}>
          {deliveryman ? (
            <LoadScript googleMapsApiKey='AIzaSyCDdjSa4towU8PmPM69QoPItOkOz7xOXII'>
              <div className={styles['route-container']}>
                <Route
                  setPreviewTime={setTime}
                  setDistance={setDistance}
                  destination={
                    order?.routes?.arrived ? order.routes.arrived : [0, 0]
                  }
                  origin={order?.routes?.origin ? order.routes.origin : [0, 0]}
                  waypoints={
                    order?.routes?.waypoints ? order.routes.waypoints : [[0, 0]]
                  }
                />
              </div>
              {deliveryman ? (
                <>
                  {' '}
                  <div className={styles['delivery-man-card']}>
                    <div className={styles['delivery-header']}>
                      <div
                        className={styles['photo']}
                        style={{
                          backgroundImage: `url('${deliveryman.picture_uri}')`,
                        }}
                      ></div>
                      <div className={styles['review']}>
                        <h1>{deliveryman?.name}</h1>
                        <RatingStarsStatic
                          reviewValue={
                            deliveryman?.review / deliveryman?.avaliations
                          }
                        />
                      </div>
                    </div>

                    <div className={styles['delivery-info']}>
                      <div className={styles['info-text']}>
                        <h2>Distância: </h2>
                        <span>
                          {distance.toFixed(2).toString().replace(/\./g, ',')}{' '}
                          km
                        </span>
                      </div>
                      <div className={styles['info-text']}>
                        <h2>Tempo estimado: </h2>
                        <span>
                          {time.toFixed(2).toString().replace(/\./g, ',')}{' '}
                          minutos
                        </span>
                      </div>
                    </div>
                          
                   
                    <div className={styles['delivery-buttons']}>
                      <button id={styles['message']} onClick={() => {
                        setShowChat(true)
                      }}>
                        <img src={MessageIcon} />
                        <span>Mensagem</span>
                      </button>
                    </div> 
                  </div>
                  {                    
                    showChat && (
                      <Chat 
                        isChatOpen={showChat}
                        setChatOpen={setShowChat}
                        from={(JSON.parse(localStorage.getItem('user-details'))).id}
                        _to={{ 
                          id: deliveryman.id,
                          name: deliveryman.name,
                          photo: deliveryman.picture_uri,

                        }}
                      />
                    )
                  }

                </>
              ) : (
                <Loading />
              )}
            </LoadScript>
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <Footer useMargin={false} />
    </div>
  );
};

export default MyOrderPage;
