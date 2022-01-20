import React, { useState } from "react";

import CreateJobTemplate from "../templates/CreateJob";

function CreateJobPage() {
  const POSITIONS = {
    pickUp: {
      address: "29 Rue Du 4 Septembre",
      lat: 48.86985,
      lng: 2.33457,
    },
    dropOff: {
      address: "15 Rue de Bourgogne",
      lat: 48.85908,
      lng: 2.31804,
    },
  };

  const [positionsState, setPositionsState] = useState({
    pickUp: { state: "blank" },
    dropOff: { state: "blank" },
  });

  const geocodeAddress = (data) => {
    console.log(
      "GEOCODING...",
      data,
      data.currentTarget.id,
      data.currentTarget.value
    );

    const target = data.currentTarget;

    const position = POSITIONS[target.id];

    if (position.address === target.value) {
      setPositionsState({
        ...positionsState,
        [target.id]: { state: "present", lat: position.lat, lng: position.lng },
      });
    } else {
      setPositionsState({
        ...positionsState,
        [target.id]: { state: "error" },
      });
    }
  };

  return (
    <CreateJobTemplate
      positionsState={positionsState}
      geocodeAddress={geocodeAddress}
    />
  );
}

export default CreateJobPage;
