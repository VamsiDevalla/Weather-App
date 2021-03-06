/* eslint-disable unicorn/no-null */
import React, { useState } from 'react';
import './google-map-marker.styles.scss';

const GoogleMapMarker = (options: google.maps.MarkerOptions): null => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

export default GoogleMapMarker;
