import { setWeather } from "./index";
import { SpinnerWeather } from "../utils/index";

const apiKey: string = "e9cb0113e83d5fb7d38d6909b07913cf";
const lat: string = "53.8931";
const lon: string = "30.3325";
const part: string = "hourly,minutely";
const language: string = "en";
const units: string = "metric";
const url: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=${language}&units=${units}&exclude=${part}&appid=${apiKey} `;

export function weather(): void {
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
