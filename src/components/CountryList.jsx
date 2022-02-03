import React from "react";
import { useState, useEffect } from "react";
import { updateCountryData } from "../actions/country_action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return { countries: state.countryData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCountryData: (data) => dispatch(updateCountryData(data))
  };
};

const CountryList = (props) => {
  console.log(props);
  const countries = props.countries;
  useEffect(() => {
    console.log("call api");
    const countryData = fetch("https://restcountries.com/v3.1/region/Europe");
    countryData
      .then((resp) => resp.json())
      .then((data) => props.updateCountryData(data));
  }, []);

  console.log(countries);
  const rowData = countries.map((item, i) => {
    return (
      <div className="row" key={i + 1}>
        <div className="data-item"> {item.region} </div>
        <div className="data-item"> {item.subregion} </div>
        <div className="data-item"> {item.name.common} </div>
      </div>
    );
  });

  return (
    <div className="grid-container">
      <div className="grid">{rowData}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
