import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './map.styles.scss';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './google-map/google-map.component';
import GoogleMapMarker from './google-map-marker/google-map-marker.component';
import Spinner from '../lib/spinner/spinner.component';

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;
type MapProperties = {
  coords: google.maps.LatLngLiteral;
  zoom: number;
  coordsHandler: Dispatch<SetStateAction<google.maps.LatLngLiteral>>;
  zoomHandler: Dispatch<SetStateAction<number>>;
};

const fallBack = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <div>Something went wrong while rendering Google Map</div>;
    default:
      return <h1>{status}</h1>;
  }
};
const Map = ({ coords, zoom, coordsHandler, zoomHandler }: MapProperties): JSX.Element => {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(coords);

  useEffect(() => setCenter(coords), [coords]);

  const onClick = (event_: google.maps.MapMouseEvent) => {
    if (event_.latLng) {
      coordsHandler(event_.latLng.toJSON());
    }
  };

  const onIdle = (m: google.maps.Map) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    zoomHandler(m.getZoom()!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <div className='map-container'>
      <Wrapper apiKey={`${GOOGLE_MAP_KEY}`} render={fallBack}>
        <GoogleMap
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: '1', height: '100%', width: '100%', borderRadius: '0 0 0 40px' }}
        >
          <GoogleMapMarker position={coords} />
        </GoogleMap>
      </Wrapper>
    </div>
  );
};

export default Map;
