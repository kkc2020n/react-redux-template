import React from "react";
import { useState, useEffect } from "react";
import { updateCityData } from "../actions/country_action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return { cities: state.cityData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCityData: (data) => dispatch(updateCityData(data))
  };
};

const CityList = (props) => {
  console.log(props);
  const cities = props.cities;
  useEffect(() => {
    console.log("call api");
    const cityData = fetch("https://restcountries.com/v3.1/region/Europe");
    cityData
      .then((resp) => resp.json())
      .then((data) => props.updateCityData(data));
  }, []);

  console.log(cities);
  const rowData = cities.map((item, i) => {
    return (
      <div className="row" key={i + 1}>
        <div className="data-item"> {item.name.common} </div>
        <div className="data-item"> {item.capital} </div>
      </div>
    );
  });

  return (
    <div className="grid-container">
      <div className="grid">{rowData}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
