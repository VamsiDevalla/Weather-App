import React, { useEffect, useRef, PropsWithChildren, cloneElement, isValidElement, Children, useState } from 'react'
import { useDeepCompareEffectForMaps } from './google-map.utils'

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
}

const GoogleMap = ({ onClick, onIdle, children, style, ...options }: PropsWithChildren<MapProps>): JSX.Element => {
  const mapElementRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (mapElementRef.current && !map) {
      setMap(new window.google.maps.Map(mapElementRef.current, {}))
    }
  }, [mapElementRef, map])

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  React.useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      )

      if (onClick) {
        map.addListener('click', onClick)
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map))
      }
    }
  }, [map, onClick, onIdle])

  return (
        <>
            <div ref={mapElementRef} style={style} />
            {Children.map(children, (child) => {
              if (isValidElement(child)) {
                return cloneElement(child, { map })
              }
            })}
       </>
  )
}

export default GoogleMap
