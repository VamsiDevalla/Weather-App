import React, { useState } from "react";
import "./map.styles.scss";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "./google-map/google-map.component";
import GoogleMapMarker from "./google-map-marker/google-map-marker.component";

type MapProps = {
  coords: google.maps.LatLngLiteral;
  clickHandler: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>;
}

const fallBack = (status: Status) => {
    return <h1>{status}</h1>
}
const Map = ({coords, clickHandler}: MapProps):JSX.Element => {
  const [zoom, setZoom] = useState(15); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(coords);

  const onClick = (e: google.maps.MapMouseEvent) => {
    if(e.latLng) {
      clickHandler(e.latLng.toJSON());
    }
  };

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
      <div className="map-container">
          <Wrapper apiKey={"AIzaSyDQwesSj7xLgLTbeCDtXXZ5GteHi9tj5iA"} render={fallBack}>
      <GoogleMap
        center={center}
        onClick={onClick}
        onIdle={onIdle}
        zoom={zoom}
        style={{ flexGrow: "1", height: "100%", width: "100%" }}
      >
        <GoogleMapMarker position={coords} />
      </GoogleMap>
    </Wrapper>
      </div>
  )
}

export default Map;