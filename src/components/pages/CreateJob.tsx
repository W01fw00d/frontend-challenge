import React, { useState } from "react";

// import { geocodeAddressRequest, createJobRequest } from "../../api/main";
import { geocodeAddressRequest, createJobRequest } from "../../api/mainMocked";

import CreateJobTemplate from "../templates/CreateJob";

function CreateJobPage() {
  const [positionsState, setPositionsState] = useState({
    pickUp: { state: "blank", value: "" },
    dropOff: { state: "blank", value: "" },
  });

  const [createJobState, setCreateJobState] = useState("successful");

  const resetJobState = () => {
    setCreateJobState();
  };

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
            geocode: {
              lat: geocode.latitude,
              lng: geocode.longitude,
            },
          },
        });
      }
    });
  };

  const createJob = () => {
    setCreateJobState("inProcess");
    createJobRequest(
      positionsState.pickUp.value,
      positionsState.dropOff.value
    ).then((result) => {
      console.log("createJob", result);

      if (result.errors) {
        setCreateJobState(null);
      } else {
        setCreateJobState("successful");
      }
    });
  };

  return (
    <CreateJobTemplate
      positionsState={positionsState}
      createJobState={createJobState}
      setPosition={setPosition}
      geocodeAddress={geocodeAddress}
      createJob={createJob}
      resetJobState={resetJobState}
    />
  );
}

export default CreateJobPage;
