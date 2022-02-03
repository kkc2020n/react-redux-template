import { UPDATE_COUNTRIES } from "../utils/Constants";

const intitalState = [];

const countryReducer = (state = intitalState, action) => {
  switch (action.type) {
    case UPDATE_COUNTRIES:
      return Object.assign([], state, action.payload);
    default:
      return state;
  }
};

export default countryReducer;
