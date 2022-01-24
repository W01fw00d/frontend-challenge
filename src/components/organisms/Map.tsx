import React, { useEffect, useRef } from "react";

import { PositionState } from "../../interfaces/PositionState";

interface Props {
  positionsState: { [key: string]: PositionState };
}

function Map({ positionsState }: Props) {
  const mapElement = useRef<any>();
  const markerElements = useRef<any>({
    pickUp: null,
    dropOff: null,
  });

  useEffect(() => {
    const CENTER_POSITION = {
      address: "Place De La Concorde",
      lat: 48.865551,
      lng: 2.32079,
    };

    mapElement.current = new window.google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: CENTER_POSITION.lat, lng: CENTER_POSITION.lng },
        zoom: 15,
        disableDefaultUI: true,
      }
    );
  }, []);

  useEffect(() => {
    const removeMarker = (marker: any) => marker.setMap(null);

    const updateMarker = (marker: string) => {
      const geocode = positionsState[marker].geocode;

      if (geocode) {
        if (!markerElements.current[marker]) {
          markerElements.current = {
            ...markerElements.current,
            [marker]: new google.maps.Marker({
              position: {
                lat: geocode.lat,
                lng: geocode.lng,
              },
              icon: `src/assets/${[marker]}Marker.svg`,
              map: mapElement.current,
            }),
          };
        }
      } else if (markerElements.current[marker]) {
        removeMarker(markerElements.current[marker]);
        markerElements.current = { ...markerElements.current, [marker]: null };
      }
    };

    updateMarker("pickUp");
    updateMarker("dropOff");
  }, [positionsState]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      id="map"
    />
  );
}

export default Map;
