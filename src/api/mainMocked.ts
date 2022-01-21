// Mocked functions for testing during development process, avoiding real API requests

const POSITIONS = {
  "29 Rue Du 4 Septembre": {
    lat: 48.86985,
    lng: 2.33457,
  },
  "15 Rue de Bourgogne": {
    lat: 48.85908,
    lng: 2.31804,
  },
};

export async function geocodeAddressRequest(address: string) {
  const position = POSITIONS[address];

  if (position) {
    return await {
      data: { geocode: { latitude: position.lat, longitude: position.lng } },
    };
  } else {
    return await { errors: true };
  }
}

export async function createJobRequest(pickUp: string, dropOff: string) {
  if (POSITIONS[pickUp] && POSITIONS[dropOff]) {
    return await {};
  } else {
    return await { errors: true };
  }
}
