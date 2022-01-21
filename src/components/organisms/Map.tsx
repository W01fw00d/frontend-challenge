import React, { useState, useEffect } from "react";

function Map({ positionsState }) {
  let [mapState, setMapState] = useState();
  let [markersState, setMarkersState] = useState({
    pickUp: null,
    dropOff: null,
  });

  useEffect(() => {
    // Mocked geocoded positions
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

    const removeMarkers = () => {
      pickUpMarker.setMap(null);
      dropOffMarker.setMap(null);
    };

    // removeMarkers();
  }, []);

  useEffect(() => {
    // const removeMarker = (marker) => marker.setMap(null);

    if (!markersState.pickUp && positionsState.pickUp.lat) {
      setMarkersState({
        ...markersState,
        pickUp: new google.maps.Marker({
          position: {
            lat: positionsState.pickUp.lat,
            lng: positionsState.pickUp.lng,
          },
          icon: "src/assets/pickUpMarker.svg",
          map: mapState,
        }),
      });
    }

    if (!markersState.dropOff && positionsState.dropOff.lat) {
      setMarkersState({
        ...markersState,
        dropOff: new google.maps.Marker({
          position: {
            lat: positionsState.dropOff.lat,
            lng: positionsState.dropOff.lng,
          },
          icon: "src/assets/dropOffMarker.svg",
          map: mapState,
        }),
      });
    }

    /* else if (markersState.pickUp) {
      removeMarker(markersState);
      setMarkersState({ ...markersState, pickUp: null });
    } */
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
