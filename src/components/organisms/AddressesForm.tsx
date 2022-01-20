import React from "react";

import { styled } from "@mui/system";

import Button from "../atoms/Button";
import IconTextInput from "../molecules/IconTextInput";

function AddressesForm({ styles }) {
  const FormBox = styled("div")({
    display: "flex",
    flexDirection: "column",

    width: "400px",
    borderRadius: "8px",
    padding: "16px",
    margin: "32px",
    backgroundColor: "white",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.10), 0 1px 8px 0 rgba(0,0,0,0.10)",
    ...styles,
  });

  return (
    <FormBox>
      <IconTextInput
        iconPath="src/assets/pickUpBadgeBlank.svg"
        alt="Pick Up badge with grey background"
        placeholder={"Pick up address"}
        styles={{ marginBottom: "16px" }}
      />
      <IconTextInput
        iconPath="src/assets/dropOffBadgeBlank.svg"
        alt="Drop off badge with grey background"
        placeholder={"Drop off address"}
        styles={{ marginBottom: "16px" }}
      />
      <Button
        label="Create job"
        styles={{ width: "360px", alignSelf: "flex-end" }}
        /* disabled */ // TODO: disable during request
      />
    </FormBox>
  );
}

export default AddressesForm;
