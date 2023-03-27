// // import axios from "axios"


// let map, infoWindow

// // const getRouteData = async () =>  { 
    
// // }

// // função para definir rotas e ativar a geolozalização do dispositivo
// async function initMap() {
//     // localização inicial
//     map = new window.google.maps.Map(document.getElementById("root"), {
//         center: { lat: -34.397, lng: 150.644 },
//             zoom: 8,
//     })
    
//     const directionService = new window.google.maps.DirectionsService()
//     // pontos de origem e destino
//     const rota = await directionService.route({
//         origin: "Senai Jandira - Sp, Brasil",
//         destination: "Rua altino gonçalves 163, nova jandira",
//         travelMode: window.google.maps.TravelMode.DRIVING
//     })
//     // handler direction (bind)
//     const directionsRenderer = new window.google.maps.DirectionsRenderer({
//         draggable: true
//     })

//     directionsRenderer.setMap(map)

//     directionsRenderer.setDirections(rota)

//     infoWindow = new window.google.maps.InfoWindow()

//     //criação do botão para ativar a geolocalização do dispositivo
//     const locationButton = document.createElement("button")

//     locationButton.textContent = "Ir para a localização atual"
//     locationButton.classList.add("custom-map-control-button")
//     map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton)
//     locationButton.addEventListener("click", () => {
//         // permissão para acessar a geolocalização do navegador
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     //dados de latitude e longitude da localização atual
//                     const pos = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     }

//                     infoWindow.setPosition(pos)
//                     infoWindow.setContent("Location found.")
//                     infoWindow.open(map)
//                     map.setCenter(pos)
//                 },
//                 () => {
//                     handleLocationError(true, infoWindow, map.getCenter())
//                 }
//             )
//         } else {
//             // navegador não suporta ou o dispositivo não permite a geolocalização
//             handleLocationError(false, infoWindow, map.getCenter())
//         }
//     })
//     console.log(map)
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//         browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
// }

// window.initMap = initMap




import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}