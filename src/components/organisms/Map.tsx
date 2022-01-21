import React, { useState, useEffect } from "react";

function Map({ positionsState }) {
  let [mapState, setMapState] = useState();
  let [markersState, setMarkersState] = useState({
    pickUp: null,
    dropOff: null,
  });

  useEffect(() => {
    const CENTER_POSITION = {
      address: "Place De La Concorde",
      lat: 48.865551,
      lng: 2.32079,
    };

    setMapState(
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: CENTER_POSITION.lat, lng: CENTER_POSITION.lng },
        zoom: 15,
      })
    );
  }, []);

  useEffect(() => {
    const removeMarker = (marker) => marker.setMap(null);

    if (positionsState.pickUp.geocode) {
      if (!markersState.pickUp) {
        const geocode = positionsState.pickUp.geocode;

        setMarkersState({
          ...markersState,
          pickUp: new google.maps.Marker({
            position: {
              lat: geocode.lat,
              lng: geocode.lng,
            },
            icon: "src/assets/pickUpMarker.svg",
            map: mapState,
          }),
        });
      }
    } else if (markersState.pickUp) {
      removeMarker(markersState.pickUp);
      setMarkersState({ ...markersState, pickUp: null });
    }

    if (positionsState.dropOff.geocode) {
      if (!markersState.dropOff) {
        const geocode = positionsState.dropOff.geocode;

        setMarkersState({
          ...markersState,
          dropOff: new google.maps.Marker({
            position: {
              lat: geocode.lat,
              lng: geocode.lng,
            },
            icon: "src/assets/dropOffMarker.svg",
            map: mapState,
          }),
        });
      }
    } else if (markersState.dropOff) {
      removeMarker(markersState.dropOff);
      setMarkersState({ ...markersState, dropOff: null });
    }
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
