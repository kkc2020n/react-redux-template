import { combineReducers } from "redux";
import cityReducer from "./city_reducer";
import countryReducer from "./country_reducer";

const rootReducer = combineReducers({
  countryData: countryReducer,
  cityData: cityReducer
});

export default rootReducer;
