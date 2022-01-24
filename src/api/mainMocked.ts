import {
  Geocode,
  GeocodeAPIResponse,
  CreateJobAPIResponse,
} from "../interfaces/APIResponse";

// Mocked functions for testing during development process, avoiding real API requests

interface Positions {
  [key: string]: Geocode;
}

const POSITIONS: Positions = {
  pick: {
    latitude: 48.86985,
    longitude: 2.33457,
  },
  drop: {
    latitude: 48.85908,
    longitude: 2.31804,
  },
};

export async function geocodeAddressRequest(
  address: string
): Promise<GeocodeAPIResponse> {
  const position = POSITIONS[address];

  const result = position
    ? {
        data: { geocode: { ...position } },
      }
    : { errors: true };

  return await result;
}

export async function createJobRequest(
  pickUp: string,
  dropOff: string
): Promise<CreateJobAPIResponse> {
  const result =
    POSITIONS[pickUp] && POSITIONS[dropOff] ? {} : { errors: true };

  return await result;
}
