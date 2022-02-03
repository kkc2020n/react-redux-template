import React from "react";
import CountryList from "./components/CountryList";
import CityList from "./components/CityList";

const App = (props) => {
  return (
    <div className="main-content">
      <CountryList />
      <CityList />
    </div>
  );
};

export default App;
