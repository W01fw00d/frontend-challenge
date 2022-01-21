import React, { useState } from "react";

// import { geocodeAddressRequest, createJobRequest } from "../../api/main";
import { geocodeAddressRequest, createJobRequest } from "../../api/mainMocked";

import CreateJobTemplate from "../templates/CreateJob";

function CreateJobPage() {
  const BLANK_POSITION_STATE = {
    pickUp: { state: "blank", value: "" },
    dropOff: { state: "blank", value: "" },
  };

  const [positionsState, setPositionsState] = useState({
    ...BLANK_POSITION_STATE,
  });

  const [createJobState, setCreateJobState] = useState();

  const resetJobState = () => {
    setCreateJobState();
  };

  const setPosition = (id, value) => {
    setPositionsState({
      ...positionsState,
      [id]: { ...positionsState[id], value },
    });
  };

  const geocodeAddress = ({ target }) => {
    const id = target.id;
    const value = target.value;

    if (value) {
      geocodeAddressRequest(target.value).then((result) => {
        if (result.errors) {
          setPositionsState({
            ...positionsState,
            [id]: {
              ...positionsState[id],
              value: target.value,
              state: "error",
            },
          });
        } else {
          const geocode = result.data.geocode;
          setPositionsState({
            ...positionsState,
            [id]: {
              ...positionsState[id],
              value: target.value,
              state: "present",
              geocode: {
                lat: geocode.latitude,
                lng: geocode.longitude,
              },
            },
          });
        }
      });
    }
  };

  const createJob = () => {
    setCreateJobState("inProcess");
    createJobRequest(
      positionsState.pickUp.value,
      positionsState.dropOff.value
    ).then((result) => {
      if (result.errors) {
        setCreateJobState(null);
      } else {
        setCreateJobState("successful");
        setPositionsState({
          ...BLANK_POSITION_STATE,
        });
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
