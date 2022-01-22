import React from "react";

import { styled } from "@mui/system";

import Button from "../atoms/Button";
import IconTextInput from "../molecules/IconTextInput";

const FormBox = styled("div")(({ styles }: any) => ({
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

interface Props {
  styles: object;
  formState: object;
  createJobState: string;
  positionsState: object;
  setPosition: Function;
  geocodeAddress: Function;
  createJob: Function;
}

function AddressesForm({
  styles,
  formState,
  createJobState,
  positionsState,
  setPosition,
  geocodeAddress,
  createJob,
}: Props) {
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
        value={formState.pickUp}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPosition("pickUp", event.target.value);
        }}
        geocodeAddress={geocodeAddress}
      />
      <IconTextInput
        id="dropOff"
        iconPath={ICONS_PATHS.dropOff[positionsState.dropOff.state]}
        alt="Drop off badge with grey background"
        placeholder={"Drop off address"}
        styles={{ marginBottom: "16px" }}
        value={formState.dropOff}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPosition("dropOff", event.target.value);
        }}
        geocodeAddress={geocodeAddress}
      />
      <Button
        label={createJobState === "inProcess" ? "Creating..." : "Create job"}
        styles={{ width: "360px", alignSelf: "flex-end" }}
        disabled={
          createJobState === "inProcess" ||
          positionsState.pickUp.state !== "present" ||
          positionsState.dropOff.state !== "present"
        }
        onClick={() => {
          createJob();
        }}
      />
    </FormBox>
  );
}

export default AddressesForm;
