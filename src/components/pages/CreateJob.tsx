import React, { useState } from "react";

import { geocodeAddressRequest } from "../../api/geocode";

import CreateJobTemplate from "../templates/CreateJob";

function CreateJobPage() {
  const [positionsState, setPositionsState] = useState({
    pickUp: { state: "blank", value: "" },
    dropOff: { state: "blank", value: "" },
  });

  const setPosition = (id, value) => {
    setPositionsState({
      ...positionsState,
      [id]: { ...positionsState[id], value },
    });
  };

  const geocodeAddress = ({ currentTarget }) => {
    const id = currentTarget.id;

    geocodeAddressRequest(currentTarget.value).then((result) => {
      if (result.errors) {
        setPositionsState({
          ...positionsState,
          [id]: {
            ...positionsState[id],
            state: "error",
          },
        });
      } else {
        const geocode = result.data.geocode;
        setPositionsState({
          ...positionsState,
          [id]: {
            ...positionsState[id],
            state: "present",
            lat: geocode.latitude,
            lng: geocode.longitude,
          },
        });
      }
    });
  };

  return (
    <CreateJobTemplate
      positionsState={positionsState}
      setPosition={setPosition}
      geocodeAddress={geocodeAddress}
    />
  );
}

export default CreateJobPage;
