import { UPDATE_COUNTRIES, UPDATE_CITIES } from "../utils/Constants";
export const updateCountryData = (payload) => {
  return {
    type: UPDATE_COUNTRIES,
    payload
  };
};

export const updateCityData = (payload) => {
  return {
    type: UPDATE_CITIES,
    payload
  };
};
