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

  return (
    <div className='homepage'>
      <CoordinateForm coords={coords} setCoordinates={setCoords} />
      <Weather />
      <Map coords={coords} clickHandler={setCoords} />
    </div>
  );
};

export default Homepage;
