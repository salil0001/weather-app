export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const NEW_DATE = new Date();

export const precedentNextThreeDays = (indexOfWeekDay) => {
  const days = [];
  let indexOfWeek = indexOfWeekDay;
  const isEndOfWeekEnd = indexOfWeekDay === 6;

  for (let i = 0; i < 3; i++) {
    if (indexOfWeek === isEndOfWeekEnd) indexOfWeek = 0;
    indexOfWeek += 1;
    days.push(WEEKDAYS[indexOfWeek]);
  }

  return days;
};

export const getUpcomingDays = () => {
  const CURRENT_DAY = WEEKDAYS[NEW_DATE.getDay()];

  const indexOfWeekDay = WEEKDAYS.indexOf(CURRENT_DAY);
  const nextThreeDays = precedentNextThreeDays(indexOfWeekDay);

  return nextThreeDays;
};

export const weatherData = {};

export const filterWeather = (list) => {
  for (let i = 0; i < list.length; i++) {
    const {
      dt_txt,
      main: { temp_max, temp_min },
      weather,
    } = list[i];
    const icon = weather?.[0]?.icon;
    const weekDay = new Date(dt_txt).getDay();
    weatherData[WEEKDAYS[weekDay]] = { temp_max, temp_min, icon };
  }

  return weatherData;
};


/**
 * Website Source: https://www.geeksforgeeks.org/debouncing-in-javascript/
 */
export const debounce = (func, delay) => {
  let debounceTimer
  return function() {
      const context = this
      const args = arguments
          clearTimeout(debounceTimer)
              debounceTimer
          = setTimeout(() => func.apply(context, args), delay)
  }
} 