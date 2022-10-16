import { useState } from "react";
import CitiesList from "./files/cities-fr.json";
import { ThemeContext, store } from "./config";

import Dropdown from "./Dropdown";
import CurrentWeather from "./CurrentWeather";
import Weekdays from "./Weekdays";

import "./App.css";

const APP_ID = "7ba2fc4f76fcd57ceb689e244bc3433c";

function App() {
  const [state, setState] = useState(store);

  const updateState = (value) => {
    setState((state) => ({ ...state, ...value }));
  };

  const fetchWeatherData = async (value) => {
    const { lat, lon } = CitiesList.find(({ nm }) => nm === value) || {};

    updateState({ isLoading: true });

    const promise1 = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
    ).then((value) => value.json());

    const promise2 = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
    ).then((value) => value.json());

    Promise.all([promise1, promise2])
      .then(([promise1, promise2]) => {
        const { cod } = promise1;
        if (cod === "400") {
          updateState({
            error: "Invalid City!! Select a city from dropdown.",
            isLoading: false,
          });
          return;
        }
        updateState({
          apiData: promise1,
          weatherForecastData: promise2,
          isLoading: false,
          error: false,
        });
      })
      .catch((err) => {
        console.log("err:::", err);
      });
  };

  return (
    <ThemeContext.Provider value={{ ...state, fetchWeatherData }}>
      <div className="App">
        <Dropdown />
        <CurrentWeather />
        <Weekdays />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
