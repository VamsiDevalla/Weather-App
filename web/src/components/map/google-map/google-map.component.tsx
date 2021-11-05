import React, { useEffect, useRef, PropsWithChildren, cloneElement, isValidElement, Children, useState } from 'react';
import { useDeepCompareEffectForMaps } from './google-map.utils';

interface MapProperties extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (event_: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const GoogleMap = ({ onClick, onIdle, children, style, ...options }: PropsWithChildren<MapProperties>): JSX.Element => {
  const mapElementReference = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (mapElementReference.current && !map) {
      setMap(new window.google.maps.Map(mapElementReference.current, {}));
    }
  }, [mapElementReference, map]);

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      for (const eventName of ['click', 'idle']) google.maps.event.clearListeners(map, eventName);

      if (onClick) {
        map.addListener('click', onClick);
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={mapElementReference} style={style} />
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default GoogleMap;
