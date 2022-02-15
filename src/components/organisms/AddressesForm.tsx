import React from "react";

import { FormState } from "../../interfaces/FormState";
import { PositionState } from "../../interfaces/PositionState";
import { GeocodeStatus } from "../../enums/GeocodeStatus";

import Button from "../atoms/Button";
import FormBox from "../atomsStyled/FormBox";
import IconTextInput from "../molecules/IconTextInput";

interface Props {
  styles: object;
  formState: FormState;
  createJobState: string | null;
  positionsState: { [key: string]: PositionState };
  setPosition: Function;
  geocodeAddress: Function;
  createJob: Function;
}

interface IconsPaths {
  pickUp: { [key: string]: string };
  dropOff: { [key: string]: string };
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
  const ICONS_PATH_TEMPLATE = (file: string) => `src/assets/${file}.svg`;
  const ICONS_PATHS: IconsPaths = {
    pickUp: {
      blank: ICONS_PATH_TEMPLATE("pickUpBadgeBlank"),
      present: ICONS_PATH_TEMPLATE("pickUpBadgePresent"),
      error: ICONS_PATH_TEMPLATE("pickUpBadgeError"),
    },
    dropOff: {
      blank: ICONS_PATH_TEMPLATE("dropOffBadgeBlank"),
      present: ICONS_PATH_TEMPLATE("dropOffBadgePresent"),
      error: ICONS_PATH_TEMPLATE("dropOffBadgeError"),
    },
  };

  return (
    <FormBox style={styles}>
      {/* TODO: create a DRY function to render these inputs */}
      <IconTextInput
        id="pickUp"
        iconPath={ICONS_PATHS.pickUp[positionsState.pickUp.status]}
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
        iconPath={ICONS_PATHS.dropOff[positionsState.dropOff.status]}
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
          positionsState.pickUp.status !== GeocodeStatus.Present ||
          positionsState.dropOff.status !== GeocodeStatus.Present
        }
        onClick={() => {
          createJob();
        }}
      />
    </FormBox>
  );
}

export default AddressesForm;
