import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from '@react-google-maps/api';

export function Maps({ locations }) {
  const center = {
    lat: -23.5107426,
    lng: -46.7845045,
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
  };

  console.log(locations);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCDdjSa4towU8PmPM69QoPItOkOz7xOXII',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  function createKey(location) {
    return location.lat + location.lng;
  }

  useEffect(() => {
    console.log(isLoaded, locations);
  }, [isLoaded, locations]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
        {locations.map((location) => {
            return (
              <Marker
                key={createKey(location)}
                position={location}
              ></Marker>
            );
          })
      }
    </GoogleMap>
  ) : (
    <>
      <p>Teste</p>
    </>
  );
}

export default React.memo(Maps);
