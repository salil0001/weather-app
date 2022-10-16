import React, { useContext } from "react";
import LoaderIcon from "../Svg/Loader";
import { ThemeContext } from "../config";

import "./CurrentWeather.scss";

export default function CurrentWeather() {
  const {
    isLoading,
    apiData: { name, weather, main },
    error,
  } = useContext(ThemeContext);
  const icon = weather?.[0]?.icon;
  const description = weather?.[0]?.description;
  const temperature = main?.temp;

  return (
    <div className="currentWeatherContainer">
      {isLoading ? (
        <LoaderIcon />
      ) : error ? (
        <>{error}</>
      ) : (
        <>
          <div className="cityName">{name}</div>
          <div className="imgAlign">
            <img
              alt=""
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
          </div>
          <div className="cityTempratureOuterContainer">
            <span className="cityTemprature">
              {temperature}
              <sup>o</sup>
            </span>
            <span className="descriptionTable">({description})</span>
          </div>
        </>
      )}
    </div>
  );
}
