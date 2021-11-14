import React, { useEffect, useState } from 'react';
import './homepage.styles.scss';
import Map from '../../components/map/map.component';
import Weather from '../../components/weather/weather.component';
import CoordinateForm from '../../components/coordinates-form/coordinate-form.component';

const Homepage = (): JSX.Element => {
  const [initCoords, setInitCoords] = useState<google.maps.LatLngLiteral>({
    lat: 39.887_710_232_733_696,
    lng: -75.175_924_301_147_46,
  });
  const [coords, setCoords] = useState<google.maps.LatLngLiteral>(initCoords);

  const [zoom, setZoom] = useState<number>(15);

  const setInitialCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCoords(userCoords);
        setInitCoords(userCoords);
      });
    }
  };

  useEffect(setInitialCoordinates, []);

  return (
    <div aria-live='polite' data-testid='homepage-container' className='homepage'>
      <Weather coords={coords} />
      <CoordinateForm
        coords={coords}
        zoom={zoom}
        setCoordinates={setCoords}
        setZoom={setZoom}
        initCoords={initCoords}
      />
      <Map coords={coords} coordsHandler={setCoords} zoom={zoom} zoomHandler={setZoom} />
    </div>
  );
};

export default Homepage;
