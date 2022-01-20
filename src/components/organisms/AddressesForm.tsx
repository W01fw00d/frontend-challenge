import React from "react";

import { styled } from "@mui/system";

import Button from "../atoms/Button";
import IconTextInput from "../molecules/IconTextInput";

const FormBox = styled("div")(({ styles }) => ({
  display: "flex",
  flexDirection: "column",

  width: "400px",
  borderRadius: "8px",
  padding: "16px",
  margin: "32px",
  backgroundColor: "white",
  boxShadow: "0 1px 2px 0 rgba(0,0,0,0.10), 0 1px 8px 0 rgba(0,0,0,0.10)",
  ...styles,
}));

function AddressesForm({
  styles,
  positionsState,
  setPosition,
  geocodeAddress,
}) {
  const ICONS_PATHS = {
    pickUp: {
      blank: "src/assets/pickUpBadgeBlank.svg",
      present: "src/assets/pickUpBadgePresent.svg",
      error: "src/assets/pickUpBadgeError.svg",
    },
    dropOff: {
      blank: "src/assets/dropOffBadgeBlank.svg",
      present: "src/assets/dropOffBadgePresent.svg",
      error: "src/assets/dropOffBadgeError.svg",
    },
  };

  return (
    <FormBox styles={styles}>
      <IconTextInput
        id="pickUp"
        iconPath={ICONS_PATHS.pickUp[positionsState.pickUp.state]}
        alt="Pick Up badge with grey background"
        placeholder={"Pick up address"}
        styles={{ marginBottom: "16px" }}
        value={positionsState.pickUp.value}
        onChange={(event) => {
          setPosition("pickUp", event.currentTarget.value);
        }}
        geocodeAddress={geocodeAddress}
      />
      <IconTextInput
        id="dropOff"
        iconPath={ICONS_PATHS.dropOff[positionsState.dropOff.state]}
        alt="Drop off badge with grey background"
        placeholder={"Drop off address"}
        styles={{ marginBottom: "16px" }}
        value={positionsState.dropOff.value}
        onChange={(event) => {
          setPosition("dropOff", event.currentTarget.value);
        }}
        geocodeAddress={geocodeAddress}
      />
      <Button
        label="Create job"
        styles={{ width: "360px", alignSelf: "flex-end" }}
        // disabled // TODO: disable during request
      />
    </FormBox>
  );
}

export default AddressesForm;
