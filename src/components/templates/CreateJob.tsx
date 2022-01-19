import React from "react";

import { styled } from "@mui/system";

import AddressesForm from "../organisms/AddressesForm";
import Toaster from "../atoms/Toaster";

function CreateJobTemplate() {
  const Map = styled("div")({
    backgroundColor: "purple", // TODO: temp
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  });

  return (
    <Map>
      <AddressesForm />
      <Toaster message="Job has been created successfully!" />
    </Map>
  );
}

export default CreateJobTemplate;
