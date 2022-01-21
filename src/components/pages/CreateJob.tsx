import React, { useState } from "react";

import { geocodeAddressRequest, createJobRequest } from "../../api/main";

import CreateJobTemplate from "../templates/CreateJob";

function CreateJobPage() {
  /* const POSITIONS = {
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
  }; */

  const [positionsState, setPositionsState] = useState({
    pickUp: { state: "blank", value: "" },
    dropOff: { state: "blank", value: "" },
  });

  const [createJobState, setCreateJobState] = useState();

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

    /* const geocodeAddress = (data) => {
    const target = data.currentTarget;

    const position = POSITIONS[target.id];

    if (position.address === target.value) {
      setPositionsState({
        ...positionsState,
        [target.id]: {
          ...positionsState[target.id],
          state: "present",
          geocode: {
            lat: position.lat,
            lng: position.lng,
          },
        },
      });
    } else {
      setPositionsState({
        ...positionsState,
        [target.id]: { ...positionsState[target.id], state: "error" },
      });
    }
  }; */
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
    />
  );
}

export default CreateJobPage;
