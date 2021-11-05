import React, { EffectCallback, useEffect, useRef } from "react";
import { createCustomEqual } from "fast-equals";

const deepCompareEqualsForMaps = createCustomEqual(
  (deepEqual) => (a: any, b: any) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
  }
);

function useDeepCompareMemoize(value: any) {
  const ref = useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

export const useDeepCompareEffectForMaps = (
  callback: EffectCallback,
  dependencies: any[]
) => {
 useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export const isLatLngLiteral = (obj: any): obj is google.maps.LatLngLiteral => {
  return (
    typeof obj === "object" &&
    Number.isFinite(obj.lat) &&
    Number.isFinite(obj.lng)
  );
}


