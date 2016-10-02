import axios from 'axios';
const ROOT_URL = 'http://localhost:4000';

export const FETCH_PROPERTIES = 'FETCH_PROPERTIES';

export function fetchProperties(p) {
  const url = `${ROOT_URL}?latitude=${p.latitude}&longitude=${p.longitude}&radius=${p.radius}&minBathrooms=${p.minBathrooms}&maxBathrooms=${p.maxBathrooms}&minBedrooms=${p.minBedrooms}&maxBedrooms=${p.maxBedrooms}&zipcode=${p.zipcode}&land_use=${p.land_use}&parking_type=${p.parking_type}&number_units=${p.numberUnits}`;
  const request = axios.get(url);

  return {
    type: FETCH_PROPERTIES,
    payload: request
  };
}
