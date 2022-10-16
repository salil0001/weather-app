import React, { useRef, useContext, useEffect } from "react";
import CitiesList from "../files/cities-fr.json";
import { ThemeContext } from "../config";
import { debounce } from "../utils";

import "./Dropdown.scss";

const FIRST_CITY_SELECTED = 'Abbeville';

export default function Dropdown() {
  const inputValue = useRef("");
  const { fetchWeatherData } = useContext(ThemeContext);

  const cityList = CitiesList.map(({ id, nm }) => (
    <option key={id} value={nm}>
      {nm}
    </option>
  ));

  const handleChange = debounce((e) => {
    inputValue.current = e.target.value;
    fetchWeatherData(inputValue.current);
  }, 500);

  useEffect(()=>{
    //select first from the city
    fetchWeatherData(FIRST_CITY_SELECTED);
  },[])

  return (
    <div className="dropdownContainer">
      <label>Selectionner votre ville</label>
      <div>
        <input
          placeholder="Select from Dropdown"
          list="data"
          className="inputField"
          required
          type="text"
          onChange={handleChange}
        ></input>

        <datalist id="data">{cityList}</datalist>
      </div>
    </div>
  );
}
