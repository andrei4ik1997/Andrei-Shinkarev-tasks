import { getDate, getTime } from "../utils";

export function setWeatherCurrent(arr) {
  const { dt, temp, weather, feels_like, wind_speed, humidity, pressure } = arr;
  const { icon, description } = weather[0];
  const dateUpdateWeather = new Date(dt * 1000);
  const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
  const weatherDate = document.querySelector(".weather__date");
  const weatherTempValue = document.querySelector(".weather__tempValue");
  const weatherIconImage = document.querySelector(".weather__icon-image");
  const weatherDescription = document.querySelector(".weather__description");
  const weatherFeelsLikeValue = document.querySelector(".weather__feelsLikeValue");
  const weatherWindSpeedValue = document.querySelector(".weather__windSpeedValue");
  const weatherHumidityValue = document.querySelector(".weather__humidityValue");
  const weatherPressureValue = document.querySelector(".weather__pressureValue");
  const MILLIMETREOFMERCURY = 133.3224;
  const pressureMillimetreOfMercury = (pressure * 100) / MILLIMETREOFMERCURY;

  weatherDate.innerText = `${getDate(dateUpdateWeather)} ${getTime(dateUpdateWeather)}`;
  weatherTempValue.innerHTML = `${Math.round(temp)}&deg`;
  weatherIconImage.src = iconurl;
  weatherDescription.innerText = description;
  weatherFeelsLikeValue.innerHTML = `${Math.round(feels_like)}&deg`;
  weatherWindSpeedValue.innerText = `${wind_speed} metre/sec`;
  weatherHumidityValue.innerText = `${humidity} %`;
  weatherPressureValue.innerText = `${Math.round(pressureMillimetreOfMercury)} mmHg`;
}
