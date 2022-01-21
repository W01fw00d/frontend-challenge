import React from "react";

import { styled } from "@mui/system";

import AddressesForm from "../organisms/AddressesForm";
import Toaster from "../atoms/Toaster";
import Map from "../organisms/Map";

const Background = styled("div")({
  position: "fixed",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
});

function CreateJobTemplate({
  positionsState,
  createJobState,
  setPosition,
  geocodeAddress,
  createJob,
}) {
  return (
    <Background>
      <Map positionsState={positionsState} />
      <AddressesForm
        styles={{
          position: "fixed",
          left: 0,
          top: 0,
        }}
        createJobState={createJobState}
        positionsState={positionsState}
        setPosition={setPosition}
        geocodeAddress={geocodeAddress}
        createJob={createJob}
      />
      <Toaster
        open={createJobState === "successful"}
        message="Job has been created successfully!"
      />
    </Background>
  );
}

export default CreateJobTemplate;
