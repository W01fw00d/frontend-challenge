import React, { useEffect } from "react";

import { styled } from "@mui/system";

import AddressesForm from "../organisms/AddressesForm";
import Toaster from "../atoms/Toaster";

function CreateJobTemplate() {
  const Map = styled("div")({
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  });

  useEffect(() => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 8,
    });
  }, []);

  return (
    <Map>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
        id="map"
      />

      <AddressesForm
        styles={{
          position: "fixed",
          left: 0,
          top: 0,
        }}
      />
      <Toaster message="Job has been created successfully!" />
    </Map>
  );
}

export default CreateJobTemplate;
