import React, { useState, useEffect, useRef } from "react";

import { MapScriptStatus } from "../../enums/MapScriptStatus";
import { PositionState } from "../../interfaces/PositionState";
import googleMapsAPI from "../../secrets/googleMapsAPI.json";

interface Props {
  positionsState: { [key: string]: PositionState };
}

function Map({ positionsState }: Props) {
  const mapElement = useRef<any>();
  const markerElements = useRef<any>({
    pickUp: null,
    dropOff: null,
  });

  const [mapScriptStatus, setMapScriptStatus] = useState(
    MapScriptStatus.Unloaded
  );

  window.gm_authFailure = () => {
    // This is executed when Google Maps API throws a Authentication error
    // We presume here that the error is caused by missing a valid "key" param
    setMapScriptStatus(MapScriptStatus.Error);
  };

  window.mapScriptCallback = () => {
    setMapScriptStatus(MapScriptStatus.Loaded);
  };

  useEffect(() => {
    const createGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `${googleMapsAPI.url}?key=${googleMapsAPI.key}&callback=mapScriptCallback`;
      script.defer = true;

      document.head.appendChild(script);
    };

    createGoogleMapsScript();
  }, []);

  useEffect(() => {
    const CENTER_POSITION = {
      address: "Place De La Concorde",
      lat: 48.865551,
      lng: 2.32079,
    };

    if (mapScriptStatus === MapScriptStatus.Loaded) {
      mapElement.current = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: { lat: CENTER_POSITION.lat, lng: CENTER_POSITION.lng },
          zoom: 15,
          disableDefaultUI: true,
        }
      );
    }
  }, [mapScriptStatus]);

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

    if (mapScriptStatus === MapScriptStatus.Loaded) {
      updateMarker("pickUp");
      updateMarker("dropOff");
    }
  }, [positionsState]);

  return mapScriptStatus === MapScriptStatus.Error ? (
    // TODO: create a styled component for this, and move to a different file
    <span
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
        backgroundImage: "linear-gradient(#10A2EA, #0F99E8)",
      }}
    >
      <h1> Cannot display Google Maps </h1>
      {/* TODO: this is the error message for dev environment; define for prod env too and apply env logic */}
      <h3> Did you set your API_KEY? Check README for more details</h3>
    </span>
  ) : (
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
