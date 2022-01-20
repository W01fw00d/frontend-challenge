import React from "react";

import { styled } from "@mui/system";

import AddressesForm from "../organisms/AddressesForm";
import Toaster from "../atoms/Toaster";
import Map from "../organisms/Map";

function CreateJobTemplate({ positionsState, geocodeAddress }) {
  const Background = styled("div")({
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  });

  return (
    <Background>
      <Map positionsState={positionsState} />
      <AddressesForm
        styles={{
          position: "fixed",
          left: 0,
          top: 0,
        }}
        positionsState={positionsState}
        geocodeAddress={geocodeAddress}
      />
      <Toaster message="Job has been created successfully!" />
    </Background>
  );
}

export default CreateJobTemplate;
