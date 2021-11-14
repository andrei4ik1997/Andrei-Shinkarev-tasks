import { setWeather } from ".";
import { SpinnerWeather } from "../utils";

const apiKey = "e9cb0113e83d5fb7d38d6909b07913cf";
const lat = "53.8931";
const lon = "30.3325";
const part = "hourly,minutely";
const language = "en";
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${language}&units=${units}&exclude=${part}&appid=${apiKey} `;

export function weather() {
  const spinnerWeather = new SpinnerWeather();
  spinnerWeather.create();

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      spinnerWeather.remove();
      setWeather(result);
    })
    .catch((err) => console.log(err));
}
