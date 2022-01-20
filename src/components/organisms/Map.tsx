import React, { useEffect } from "react";

function Map() {
  useEffect(() => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 8,
    });
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
