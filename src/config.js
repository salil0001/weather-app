import React from "react";

export const store = {
  isLoading: false,
  apiData: {},
  weatherForecastData:{},
  error: false
};

export const ThemeContext = React.createContext({
  store,
});
