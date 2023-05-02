import styles from './styles.module.css'
import { useState, useEffect, useCallback } from 'react'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Footer } from '../../components/Footer'
import { RatingStarsStatic } from '../../components/RatingStarsStatic'
import { LoadScript } from '@react-google-maps/api';

import Loading from "../../components/Loading";
import Route from "../../components/RouteTester";
import { socket } from "../../api/api"
import { notify } from "../../utils/notify"
import MessageIcon from '../../imgs/message_icon.png'
import CallIcon from '../../imgs/call_icon.png'


export const MyOrderPage = () => {  
    const [order, setOrder] = useState(null)
    const [deliveryman, setDeliveryman] = useState(null)
    const [directions, setDirections] = useState(null)
    const [time, setTime] = useState(0)
    const [distance, setDistance] = useState(0)

    useEffect(() => {
      const orderStoraged = localStorage.getItem("current_travel")
      const order = JSON.parse(orderStoraged)
      setOrder(order)
      setDeliveryman(order.order.deliveryman)
      console.log(order, deliveryman);
      
    }, [])
    
    useEffect(() => {
      socket.on("travel_accepted", async (data) => {
        localStorage.setItem("current_travel", JSON.stringify(data));
        await notify("success", "Entregador Encontrado!");
        setOrder(data.order)
        setDeliveryman(data.deliveryman)
      });
       // Cleanup the listener when component unmounts
      return () => {
        socket.off('travel_accepted');
    };
    }, [])
    
    return(
        <div className={styles['my-order-page-container']}>
            <Header user={{picture_uri:""}}/>
            <div className={styles['my-order-data-container']}>
            <Title text='Meu pedido' />
            <div className={styles['my-order-content']}>
            {deliveryman ? (
            <LoadScript googleMapsApiKey="AIzaSyCQfb1qbVCwR8biTe469v_uBuVWaO9JxtY">
            <Route setPreviewTime={setTime}  setDistance={setDistance} destination={order?.route.arrived} origin={order?.route.origin} waypoints={order?.route.waypoints} /> 
            {deliveryman ? <>                <div className={styles['delivery-man-card']}>

<div className={styles['delivery-header']}>
    <div className={styles['photo']} style={{backgroundImage: `url('https://img.freepik.com/fotos-premium/entregador-de-retrato-de-perfil-no-rosto-segurando-caixas-de-papelao-e-uma-casa-de-papel_416530-558.jpg')`}}></div>
    <div className={styles['review']}>
        <h1>{deliveryman.name}</h1>
        <RatingStarsStatic 
            reviewValue={0.5}
        />
    </div>
</div>

<div className={styles['delivery-info']}>
    <div className={styles['info-text']}>
        <h2>Distância:</h2>
    <span>{distance.toFixed(2)}km</span>
    </div>
    <div className={styles['info-text']}>
        <h2>Tempo estimado:</h2>
        <span>{time.toFixed(2)} minutos</span>
    </div>
</div>

<div className={styles['delivery-buttons']}>
    <button id={styles['message']}>
        <img src={MessageIcon}/>
        <span>Mensagem</span>
    </button>
    <button id={styles['call']}>
        <img src={CallIcon}/>
        <span>Ligar</span>
    </button>
</div>

</div></> : <Loading />
}

            </LoadScript>
            ) : <Loading/>}
            
           
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyOrderPage


