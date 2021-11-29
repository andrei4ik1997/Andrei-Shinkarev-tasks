import { weekDays, month } from "../utils/index";
import { WeatherProperty } from "../interfaces";

export function setWeatherDaily(arr: Array<WeatherProperty>) {
  const weatherDaily: HTMLElement = document.querySelector(".weather__daily");
  weatherDaily.innerHTML = ``;
  arr.forEach((element: WeatherProperty) => {
    if (typeof element.temp !== "number") {
      const {
        dt,
        temp: { day: tempDay, night: tempNight },
        weather,
      } = element;
      const { icon, main } = weather[0];
      const dateWeather: Date = new Date(dt * 1000);
      const iconurl: string =
        "http://openweathermap.org/img/w/" + icon + ".png";
      const divElem: HTMLElement = document.createElement("div");
      divElem.className = `weather__day`;
      divElem.innerHTML = `<div class="weather__day-week">${weekDays[
        dateWeather.getDay()
      ].slice(0, 3)}</div>
      <div class="weather__date">${dateWeather.getDate()} ${
        month[dateWeather.getMonth()]
      }</div>
      <div class="weather__icon weather__icon_marginTopBottom10px">
      <img class="weather__iconImage" src=${iconurl} alt="Weather icon" />
      </div>
      <div class="weather__temp-day">
      Day: <span class="weather__temp-day-value">${Math.round(
        tempDay
      )}&deg</span>
      </div>
      <div class="weather__temp-night">
      Night: <span class="weather__temp-night-value">${Math.round(
        tempNight
      )}&deg</span>
      </div>
      <div
        class="weather__description"
      >${main}
      </div>`;
      weatherDaily.append(divElem);
    }
  });
}
