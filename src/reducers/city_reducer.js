import { UPDATE_CITIES } from "../utils/Constants";

const cityReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CITIES:
      return Object.assign([], state, action.payload);
    default:
      return state;
  }
};

export default cityReducer;
