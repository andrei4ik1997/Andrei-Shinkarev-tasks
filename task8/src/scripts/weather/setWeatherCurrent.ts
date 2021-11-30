import { getDate, getTime } from "../utils/index";
import { WeatherProperty } from "../interfaces";


export function setWeatherCurrent(obj: WeatherProperty) {
  const { dt, temp, weather, feels_like, wind_speed, humidity, pressure } = obj;
  const { icon, description } = weather[0];
  const dateUpdateWeather: Date = new Date(dt * 1000);
  const iconurl: string = "http://openweathermap.org/img/w/" + icon + ".png";
  const weatherDate: HTMLElement = document.querySelector(".weather__date");
  const weatherTempValue: HTMLElement = document.querySelector(
    ".weather__tempValue"
  );
  const weatherIconImage: HTMLImageElement = document.querySelector(
    ".weather__iconImage"
  );
  const weatherDescription: HTMLElement = document.querySelector(
    ".weather__description"
  );
  const weatherFeelsLikeValue: HTMLElement = document.querySelector(
    ".weather__feelsLikeValue"
  );
  const weatherWindSpeedValue: HTMLElement = document.querySelector(
    ".weather__windSpeedValue"
  );
  const weatherHumidityValue: HTMLElement = document.querySelector(
    ".weather__humidityValue"
  );
  const weatherPressureValue: HTMLElement = document.querySelector(
    ".weather__pressureValue"
  );
  const MILLIMETREOFMERCURY: number = 133.3224;
  const pressureMillimetreOfMercury: number =
    (pressure * 100) / MILLIMETREOFMERCURY;

  weatherDate.innerText = `${getDate(dateUpdateWeather)} ${getTime(
    dateUpdateWeather
  )}`;
  if (typeof temp === "number" && typeof feels_like === "number") {
    weatherTempValue.innerHTML = `${Math.round(temp)}&deg`;
    weatherFeelsLikeValue.innerHTML = `${Math.round(feels_like)}&deg`;
  }
  weatherIconImage.src = iconurl;
  weatherDescription.innerText = description;
  weatherWindSpeedValue.innerText = `${wind_speed} metre/sec`;
  weatherHumidityValue.innerText = `${humidity} %`;
  weatherPressureValue.innerText = `${Math.round(
    pressureMillimetreOfMercury
  )} mmHg`;
}
