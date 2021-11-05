/* eslint-disable @typescript-eslint/no-explicit-any */
import { EffectCallback, useEffect, useRef } from 'react';
import { createCustomEqual } from 'fast-equals';

export const isLatLngLiteral = (object: any): object is google.maps.LatLngLiteral => {
  return typeof object === 'object' && Number.isFinite(object.lat) && Number.isFinite(object.lng);
};

const deepCompareEqualsForMaps = createCustomEqual(deepEqual => (a: any, b: any) => {
  if (isLatLngLiteral(a) || a instanceof google.maps.LatLng || isLatLngLiteral(b) || b instanceof google.maps.LatLng) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }

  // TODO extend to other types

  // use fast-equals for other objects
  return deepEqual(a, b);
});

function useDeepCompareMemoize(value: any) {
  const reference = useRef();

  if (!deepCompareEqualsForMaps(value, reference.current)) {
    reference.current = value;
  }

  return reference.current;
}

export const useDeepCompareEffectForMaps = (callback: EffectCallback, dependencies: any[]) => {
  useEffect(
    callback,
    dependencies.map(x => useDeepCompareMemoize(x)),
  );
};
