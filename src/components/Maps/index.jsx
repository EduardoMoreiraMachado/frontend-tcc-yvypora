
  import React from 'react'
  import { useState } from 'react';
  import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
  import { Marker } from '@react-google-maps/api';
import { useEffect } from 'react';

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

 export function MapComponent  () {

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAxm5uYXu6Sm0SZGo8T5nHqATZtO90wZ1A"
    })
    
    const [map, setMap] = useState(null)

    console.log(setMap)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker
            position={center}
          />
          <></>
        </GoogleMap>
    ) : <></>
  
  
  }

  export default MapComponent
