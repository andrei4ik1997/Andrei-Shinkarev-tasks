import { setWeatherCurrent, setWeatherDaily } from "./index";

interface Weather {
  current: WeatherProperty;
  daily: Array<WeatherProperty>;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

interface WeatherProperty {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number | { day: number; night: number; eve: number; morn: number };
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number | { day: number; eve: number; max: number; min: number; morn: number; night: number };
  uvi: number;
  visibility: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export function setWeather(obj: Weather) {
  const { current, daily } = obj;
  setWeatherCurrent(current);
  setWeatherDaily(daily);
}
