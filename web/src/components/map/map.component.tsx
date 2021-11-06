import React, { useEffect, useState } from 'react';
import './map.styles.scss';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import GoogleMap from './google-map/google-map.component';
import GoogleMapMarker from './google-map-marker/google-map-marker.component';

type MapProperties = {
  coords: google.maps.LatLngLiteral;
  clickHandler: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>;
};

const fallBack = (status: Status) => {
  return <h1>{status}</h1>;
};
const Map = ({ coords, clickHandler }: MapProperties): JSX.Element => {
  const [zoom, setZoom] = useState(15); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(coords);

  useEffect(() => setCenter(coords), [coords]);

  const onClick = (event_: google.maps.MapMouseEvent) => {
    if (event_.latLng) {
      clickHandler(event_.latLng.toJSON());
    }
  };

  const onIdle = (m: google.maps.Map) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setZoom(m.getZoom()!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <div className='map-container'>
      <Wrapper apiKey={'AIzaSyDQwesSj7xLgLTbeCDtXXZ5GteHi9tj5iA'} render={fallBack}>
        {/* <Wrapper apiKey={"sdsjdlkfjsl"} render={fallBack}> */}
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
