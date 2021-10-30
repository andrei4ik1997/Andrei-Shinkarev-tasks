import { setWeatherCurrent, setWeatherDaily } from ".";

export function setWeather(arr) {
  const { current, daily } = arr;
  setWeatherCurrent(current);
  setWeatherDaily(daily);
}
