import React, { useState } from "react";
import "./map.styles.scss";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GoogleMap from "./google-map/google-map.component";
import GoogleMapMarker from "./google-map-marker/google-map-marker.component";

const fallBack = (status: Status) => {
    return <h1>{status}</h1>
}
const Map = ():JSX.Element => {
  const [latLng, setLatLng] = useState<google.maps.LatLng | null>(null);
  const [zoom, setZoom] = useState(3); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    setLatLng(e.latLng);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log("onIdle");
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
          <GoogleMapMarker position={latLng} />
        </GoogleMap>
      </Wrapper>
        </div>
    )
}

export default Map;