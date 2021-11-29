import { Weather } from './../interfaces';
import { setWeatherCurrent, setWeatherDaily } from "./index";

export function setWeather(obj: Weather) {
  const { current, daily } = obj;
  setWeatherCurrent(current);
  setWeatherDaily(daily);
}
