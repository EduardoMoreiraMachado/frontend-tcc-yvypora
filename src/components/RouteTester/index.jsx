import { GoogleMap, DirectionsService,LoadScript, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react'

const Route = ({
  destination,
  origin,
  waypoints,
  setDistance,
  setPreviewTime
}) => {
  // Set up your Google Maps API key and center coordinates here
  const mapContainerStyle = { width: '100%', height: '100%' };

  const center = { lat: destination[0], lng: destination[1] };

 
  

  // Set up your state variables for storing the directions response and the directions renderer
  const [directions, setDirections] = useState(null);

  useEffect(() => {
  const directionsService = new window.google.maps.DirectionsService();

   // Set up your directions request parameters here
   const waypointsList = waypoints.map((waypoint) => ({
    location: new window.google.maps.LatLng(waypoint[0], waypoint[1]),
    stopover: true,
  }));

  const directionsServiceOptions = {
    destination: new window.google.maps.LatLng(destination[0], destination[1]), 
    origin: new window.google.maps.LatLng(origin[0], origin[1]),
    waypoints: waypointsList,
    travelMode: window.google.maps.TravelMode.DRIVING,
  };

  console.log(directionsServiceOptions);

  directionsService.route(directionsServiceOptions, (result, status) => {
    if (status === window.google.maps.DirectionsStatus.OK) {
      let travelTimeInSeconds = 0;
      let distanceInMetters = 0;
      result?.routes?.[0]?.legs?.forEach((leg) => {
        travelTimeInSeconds += leg.duration?.value
        distanceInMetters += leg.distance?.value
      })
      setPreviewTime(travelTimeInSeconds / 60)
      setDistance(distanceInMetters / 1000)
      

      
      setDirections(result);
    }
  });
}, [origin, destination, waypoints]);

  return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        {directions && <DirectionsRenderer directions={directions} />}
       </GoogleMap>    
  );
};

export default React.memo(Route)
