import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface MapsProps {
  lat: number;
  lng: number;
}

type MapInstance = google.maps.Map | null;

const containerStyle = {
  width: '400px',
  height: '400px',
};

function GoogleMaps({ lat, lng }: MapsProps) {

  const center = {
    lat: lat,
    lng: lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCUns4k7DScC189WQouYWVmCkhIOwhDJto',
  });

  const [map, setMap] = React.useState<MapInstance>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, [center]);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Añadimos el marcador en la ubicación del centro */}
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);