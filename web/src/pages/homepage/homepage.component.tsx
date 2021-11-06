import React, { useState } from 'react';
import './homepage.styles.scss';
import Map from '../../components/map/map.component';
import Weather from '../../components/weather/weather.component';
import CoordinateForm from '../../components/coordinates-form/coordinate-form.component';

const Homepage = (): JSX.Element => {
  const [coords, setCoords] = useState<google.maps.LatLngLiteral>({
    lat: 39.887_710_232_733_696,
    lng: -75.175_924_301_147_46,
  });

  const [zoom, setZoom] = useState<number>(15);

  return (
    <div className='homepage'>
      <CoordinateForm coords={coords} zoom={zoom} setCoordinates={setCoords} setZoom={setZoom} />
      <Weather coords={coords} />
      <Map coords={coords} coordsHandler={setCoords} zoom={zoom} zoomHandler={setZoom} />
    </div>
  );
};

export default Homepage;
