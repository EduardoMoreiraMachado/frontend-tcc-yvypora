import styles from './styles.module.css'
import { useState, useEffect, useCallback } from 'react'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import { Footer } from '../../components/Footer'
import { RatingStarsStatic } from '../../components/RatingStarsStatic'
import {
    GoogleMap,
    DirectionsService,
    DirectionsRenderer, 
    useJsApiLoader,
  } from "@react-google-maps/api";
import Loading from "../../components/Loading";
import RouteTester from "../../components/RouteTester";

import MessageIcon from '../../imgs/message_icon.png'
import CallIcon from '../../imgs/call_icon.png'

const MOCKED_DATA = { 
    order: {
        id: 35,
        accepted_status: true,
        delivered_status_for_client: false,
        retreat_products_status: false,
        deliverymanId: 1,
        shopping_listId: 35,
        created_at: "2023-04-25T11:01:05.425Z",
        updated_at: "2023-04-25T11:11:34.740Z",
        costumer_addressesId: 1,
        intent_payment_id: 'cs_test_a1mOET7R3NIbOeNfh7FRKzfPjQsyRZrH4Yz9ugtfvrNf8W2ZdUxTh3ehYK',
        deliveryman: {
          id: 1,
          name: 'entregador de teste',
          email: 'entregador@gmail.com',
          password_hash: '$2a$05$2RP7/wkmeun/rTmb8AvddOjNCuiWOBn38kk0Z0uh/Ca0dGbVQijN.',
          picture_uri: 'https://www.clubeindriver.com.br/wp-content/uploads/2021/09/indriver-entregador.png',
          locationId: 4,
          online: true,
          created_at: "2023-04-23T22:55:05.440Z",
          updated_at: "2023-04-25T11:10:09.272Z",
          genderId: 1,
          birthday: '2005-11-04',
          gender: {
            id: 1,
            name: 'Male',
            created_at: "2023-04-23T22:53:50.984Z",
            updated_at: "2023-04-23T22:53:50.984Z"
          }
        },
        costumer_addresses: {
          id: 1,
          addressId: 1,
          costumerId: 2,
          created_at: "2023-04-23T22:55:01.745Z",
          updated_at: "2023-04-23T22:55:01.745Z",
          address: {
            id: 1,
            cep: '06233250',
            logradouro: 'Rua São Pedro',
            number: 146,
            created_at: "2023-04-23T22:55:01.745Z",
            updated_at: "2023-04-23T22:55:01.745Z",
            address_typeId: 2,
            complemento: 'Atras do sesi',
            cityId: 2,
            uFId: 2,
            neighborhoodId: 2,
            locationId: 3,
            location: [Object]
          }
        },
        shopping_list: {
          id: 35,
          freight: 19.99,
          total: 1196,
          costumerId: 2,
          created_at: "2023-04-25T11:01:05.425Z",
          updated_at:" 2023-04-25T11:01:05.425Z",
          costumer: {
            id: 2,
            name: 'Consumidor de Teste',
            email: '00drpixelss@gmail.com',
            password_hash: '$2a$06$r4/19NS/oM.8R/unDDpeCucnyWDahlM7U7FWUX9PMRxk66F1lHTuu',
            picture_uri: 'https://storage.googleapis.com/tcc-yvypora.appspot.com/1682291423469.jpeg',
            created_at: "2023-04-23T22:55:01.745Z",
            updated_at: "2023-04-23T23:10:23.477Z",
            genderId: 1,
            birthday: '2006-04-04',
            cpf: '49620968859',
            gender: [Object]
          },
          products_in_shopping_list: [ [Object] ]
        }
      }
}

const MOCKED_ROUTE_DATA =   {
    "geocoded_waypoints": [
      {
        "geocoder_status": "OK",
        "place_id": "ChIJszdTUEUBz5QRSaNirI-8zQw",
        "types": [
          "establishment",
          "food",
          "grocery_or_supermarket",
          "point_of_interest",
          "store"
        ]
      },
      {
        "geocoder_status": "OK",
        "place_id": "ChIJszdTUEUBz5QRSaNirI-8zQw",
        "types": [
          "establishment",
          "food",
          "grocery_or_supermarket",
          "point_of_interest",
          "store"
        ]
      }
    ],
    "routes": [
      {
        "bounds": {
          "northeast": {
            "lat": -23.531963,
            "lng": -46.8928214
          },
          "southwest": {
            "lat": -23.531963,
            "lng": -46.8928214
          }
        },
        "copyrights": "Map data ©2023",
        "legs": [
          {
            "distance": {
              "text": "1 m",
              "value": 0
            },
            "duration": {
              "text": "1 min",
              "value": 0
            },
            "end_address": "Av. João Vicente do Nascimento, 700 - Nucleo Micro Industrial Pres. Wilson, Jandira - SP, 06602-220, Brazil",
            "end_location": {
              "lat": -23.531963,
              "lng": -46.8928214
            },
            "start_address": "Av. João Vicente do Nascimento, 700 - Nucleo Micro Industrial Pres. Wilson, Jandira - SP, 06602-220, Brazil",
            "start_location": {
              "lat": -23.531963,
              "lng": -46.8928214
            },
            "steps": [
              {
                "distance": {
                  "text": "1 m",
                  "value": 0
                },
                "duration": {
                  "text": "1 min",
                  "value": 0
                },
                "end_location": {
                  "lat": -23.531963,
                  "lng": -46.8928214
                },
                "html_instructions": "Head",
                "polyline": {
                  "points": "vasnCbwe}G"
                },
                "start_location": {
                  "lat": -23.531963,
                  "lng": -46.8928214
                },
                "travel_mode": "DRIVING"
              }
            ],
            "traffic_speed_entry": [],
            "via_waypoint": []
          }
        ],
        "overview_polyline": {
          "points": "vasnCbwe}G"
        },
        "summary": "",
        "warnings": [],
        "waypoint_order": []
      }
    ],
    "status": "OK"
  }
export const MyOrderPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCQfb1qbVCwR8biTe469v_uBuVWaO9JxtY",
      });
    
      const [map, setMap] = useState(null);
    
      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map);
      }, []);
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null);
      }, []);
    
      function createKey(location) {
        return location.lat + location.lng;
      }
      
const center = {
    lat: -23.5489,
    lng: -46.6388,
  };
  
const containerStyle = {
    width: "80%",
    height: "400px",
  };
    
      useEffect(() => {
        console.log(isLoaded);
      }, [isLoaded]);
    const [order, setOrder] = useState({})
    const [deliveryman, setDeliveryman] = useState({})
    
    useEffect(() => {
        if (order) {
            setDeliveryman(order.deliveryman)
        }
    }, [order, deliveryman])

    useEffect(() => {
        setTimeout(() => {
            setOrder({...MOCKED_DATA.order})
        }, (5000));
        
    }, [])
    
    return(
        <div className={styles['my-order-page-container']}>
            <Header user={JSON.parse(localStorage.getItem("user-details"))} />
            <div className={styles['my-order-data-container']}>
            <Title text='Meu pedido' />
            <div className={styles['my-order-content']}>   
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
        <span>2km</span>
    </div>
    <div className={styles['info-text']}>
        <h2>Tempo estimado:</h2>
        <span>5 minutos</span>
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

</div></> : <Loading />}


            </div>
            </div>

            {/* <GoogleMap
             mapContainerStyle={containerStyle}
             center={center}
             zoom={5}
             onLoad={onLoad}
             onUnmount={onUnmount}>
            <DirectionsService 
    directions = {MOCKED_ROUTE_DATA.route}
        options={{ 
               // destination : MOCKED_ROUTE_DATA.route[0].legs[0].start_location,
              //  origin  : MOCKED_ROUTE_DATA.route[0].route[0].legs[0].end_location,
                destination : MOCKED_ROUTE_DATA.route,
                origin  : MOCKED_ROUTE_DATA.route,
                travelMode : MOCKED_ROUTE_DATA
               
              }}
              callback={
                  MOCKED_ROUTE_DATA 
              }
              onLoad={directionsRenderer => {
                console.log('DirectionsRenderer onLoad directionsRenderer: ', MOCKED_ROUTE_DATA)
              }}
              />
              <DirectionsRenderer
              options={{ 
                directions: MOCKED_ROUTE_DATA
              }}
             
              onLoad={directionsRenderer => {
                console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
              }}
              
              onUnmount={directionsRenderer => {
                console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
              }}
              

              
              />
            </GoogleMap> */}

            <RouteTester/>
            <Footer />
        </div>
    )
}

export default MyOrderPage
