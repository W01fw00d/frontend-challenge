import React, { useState } from "react";

import { geocodeAddressRequest, createJobRequest } from "../../api/main";
// import { geocodeAddressRequest, createJobRequest } from "../../api/mainMocked";

import { GeocodeStatus } from "../../enums/GeocodeStatus";
import { JobStatus } from "../../enums/JobStatus";
import { PositionState } from "../../interfaces/PositionState";
import { FormState } from "../../interfaces/FormState";

import CreateJobTemplate from "../templates/CreateJob";

function CreateJobPage() {
  const BLANK_POSITION_STATE: PositionState = { status: GeocodeStatus.Blank };

  const [pickUpPositionsState, setPickUpPositionsState] =
    useState<PositionState>({
      ...BLANK_POSITION_STATE,
    });

  const [dropOffPositionsState, setDropOffPositionsState] =
    useState<PositionState>({
      ...BLANK_POSITION_STATE,
    });

  const positionsState = {
    pickUp: pickUpPositionsState,
    dropOff: dropOffPositionsState,
  };

  const setPositionsState: { [key: string]: Function } = {
    pickUp: setPickUpPositionsState,
    dropOff: setDropOffPositionsState,
  };

  const BLANK_FORM_STATE: FormState = { pickUp: "", dropOff: "" };

  const [formState, setFormState] = useState<FormState>({
    ...BLANK_FORM_STATE,
  });

  const [createJobState, setCreateJobState] = useState<JobStatus | null>(null);

  const resetJobState = () => {
    setCreateJobState(null);
  };

  const setForm = (id: string, value: string) => {
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const geocodeAddress = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const id = target.id;
    const value = target.value;

    if (value) {
      geocodeAddressRequest(target.value).then((result) => {
        if (result.errors) {
          setPositionsState[id]({
            status: GeocodeStatus.Error,
          });
        } else {
          const geocode = result.data.geocode;
          setPositionsState[id]({
            status: GeocodeStatus.Present,
            geocode: {
              lat: geocode.latitude,
              lng: geocode.longitude,
            },
          });
        }
      });
    } else {
      setPositionsState[id]({
        status: GeocodeStatus.Blank,
      });
    }
  };

  const createJob = () => {
    setCreateJobState(JobStatus.InProcess);
    createJobRequest(formState.pickUp, formState.dropOff).then((result) => {
      if (result.errors) {
        setCreateJobState(null);
      } else {
        setCreateJobState(JobStatus.Succesful);
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
