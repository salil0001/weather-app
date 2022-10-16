import React, { Fragment, useContext } from "react";
import LoaderIcon from "../Svg/Loader";
import { getUpcomingDays, filterWeather } from "../utils";
import { ThemeContext } from "../config";
import "./Weekdays.scss";

const Weekdays = () => {
  const { weatherForecastData, isLoading, error } = useContext(ThemeContext);
  const { list = [] } = weatherForecastData;
  const days = getUpcomingDays();

  const filterDates = filterWeather(list);

  return (
    <div>
      <div className="daysContainer">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="flexForcastContainer">
        {isLoading ? (
          <LoaderIcon />
        ) : error ? (
          <>{error}</>
        ) : (
          <Fragment>
            {days.map((day) => {
              const { icon, temp_max, temp_min } = filterDates[day] || {};
              return (
                <div key={day} className="forcastContainer">
                  <div>
                    <img
                      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                      alt=""
                    />
                  </div>
                  <div className="minMaxTemperature">
                    {temp_max}
                    <sup>o</sup>
                  </div>
                  <div className="minMaxTemperature">
                    {temp_min}
                    <sup>o</sup>
                  </div>
                </div>
              );
            })}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Weekdays;
