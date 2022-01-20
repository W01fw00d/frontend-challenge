import React, { useEffect } from "react";

function Map() {
  useEffect(() => {
    const CENTER_POSITION = {
      address: "Place De La Concorde",
      lat: 48.865551,
      lng: 2.32079,
    };

    const PICKUP_POSITION = {
      address: "29 Rue Du 4 Septembre",
      lat: 48.86985,
      lng: 2.33457,
    };

    const DROPOFF_POSITION = {
      address: "15 Rue de Bourgogne",
      lat: 48.85908,
      lng: 2.31804,
    };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: CENTER_POSITION.lat, lng: CENTER_POSITION.lng },
      zoom: 15,
    });

    const pickUpMarker = new google.maps.Marker({
      position: PICKUP_POSITION,
      icon: "src/assets/pickUpMarker.svg",
      map: map,
    });

    const dropOffMarker = new google.maps.Marker({
      position: DROPOFF_POSITION,
      icon: "src/assets/dropOffMarker.svg",
      map: map,
    });

    const removeMarkers = () => {
      pickUpMarker.setMap(null);
      dropOffMarker.setMap(null);
    };

    removeMarkers();
  }, []);

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
