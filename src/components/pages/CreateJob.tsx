import React, { useState } from "react";

import { geocodeAddressRequest, createJobRequest } from "../../api/main";
// import { geocodeAddressRequest, createJobRequest } from "../../api/mainMocked";

import CreateJobTemplate from "../templates/CreateJob";

function CreateJobPage() {
  const BLANK_POSITION_STATE = { state: "blank" };

  const BLANK_FORM_STATE = { pickUp: "", dropOff: "" };

  const [pickUpPositionsState, setPickUpPositionsState] = useState({
    ...BLANK_POSITION_STATE,
  });

  const [dropOffPositionsState, setDropOffPositionsState] = useState({
    ...BLANK_POSITION_STATE,
  });

  const positionsState = {
    pickUp: pickUpPositionsState,
    dropOff: dropOffPositionsState,
  };

  const setPositionsState = {
    pickUp: setPickUpPositionsState,
    dropOff: setDropOffPositionsState,
  };

  const [formState, setFormState] = useState({ ...BLANK_FORM_STATE });

  const [createJobState, setCreateJobState] = useState();

  const resetJobState = () => {
    setCreateJobState();
  };

  const setForm = (id, value) => {
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const geocodeAddress = ({ target }) => {
    const id = target.id;
    const value = target.value;

    if (value) {
      geocodeAddressRequest(target.value).then((result) => {
        if (result.errors) {
          setPositionsState[id]({
            state: "error",
          });
        } else {
          const geocode = result.data.geocode;
          setPositionsState[id]({
            state: "present",
            geocode: {
              lat: geocode.latitude,
              lng: geocode.longitude,
            },
          });
        }
      });
    } else {
      setPositionsState[id]({
        state: "blank",
      });
    }
  };

  const createJob = () => {
    setCreateJobState("inProcess");
    createJobRequest(formState.pickUp, formState.dropOff).then((result) => {
      if (result.errors) {
        setCreateJobState(null);
      } else {
        setCreateJobState("successful");
        setPickUpPositionsState({
          ...BLANK_POSITION_STATE,
        });
        setDropOffPositionsState({
          ...BLANK_POSITION_STATE,
        });

        setFormState({ ...BLANK_FORM_STATE });
      }
    });
  };

  return (
    <CreateJobTemplate
      formState={formState}
      positionsState={positionsState}
      createJobState={createJobState}
      setPosition={setForm}
      geocodeAddress={geocodeAddress}
      createJob={createJob}
      resetJobState={resetJobState}
    />
  );
}

export default CreateJobPage;
