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
  const [deliveryman, setDeliveryman] = useState(null);
  const [directions, setDirections] = useState(null);
  const [routes, setRoutes] = useState();
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [finish, setFinish] = useState(false);

  const getCurrentDimension = () =>{
    return {
          width: window.innerWidth,
          height: window.innerHeight
    }
}
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
      const  {width } = screenSize
      console.log(width);
      if (width <= 900 ) {
        navigation('/payment-successful')
      }
  }, [screenSize, setScreenSize])



  useEffect(() => {
    try {
      const orderStoraged = localStorage.getItem('current_travel');
      const order = JSON.parse(orderStoraged);
      if (order) {
        setOrder(order.order);
        setRoutes(order.routes)
        console.log(order.routes);
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

      console.log(typeof(data));
      setOrder(data.order);
      console.log("teste", data.routes);
      setRoutes(data.routes)
      console.log(routes);
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
          console.log(order);
          socket.emit('confirm_order_arrived', { order: order });

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
                {
                  console.log(order)
                }
                <Route
                  setPreviewTime={setTime}
                  setDistance={setDistance}
                  destination={routes?.arrived ? routes.arrived : [0,0]}
                  origin={routes?.origin ? routes.origin : [0,0]}
                  waypoints={routes?.waypoints ? routes.waypoints : []}
                />
              </div>
              {deliveryman ? (
                <>
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
