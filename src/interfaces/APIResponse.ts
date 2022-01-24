export interface Geocode {
  latitude: number;
  longitude: number;
}

interface Data {
  geocode: Geocode;
}

export interface GeocodeAPIResponse {
  data?: Data;
  errors?: any;
}

export interface CreateJobAPIResponse {
  data?: Data;
  errors?: any;
}
