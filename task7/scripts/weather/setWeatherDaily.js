import { weekDays, month } from "../utils";

export function setWeatherDaily(arr) {
  const weatherDaily = document.querySelector(".weather__daily");
  weatherDaily.innerHTML = ``;
  arr.forEach((element) => {
    const {
      dt,
      temp: { day: tempDay, night: tempNight },
      weather,
    } = element;
    const { icon, main } = weather[0];
    const dateWeather = new Date(dt * 1000);
    const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
    const divElem = document.createElement("div");
    divElem.className = `weather__day`;
    divElem.innerHTML = `<div class="weather__day-week">${weekDays[dateWeather.getDay()].slice(0, 3)}</div>
      <div class="weather__date">${dateWeather.getDate()} ${month[dateWeather.getMonth()]}</div>
      <div class="weather__icon weather__icon_margin-top-bottom-10px">
      <img class="weather__icon-image" src=${iconurl} alt="Weather icon" />
      </div>
      <div class="weather__temp-day">
      Day: <span class="weather__temp-day-value">${Math.round(tempDay)}&deg</span>
      </div>
      <div class="weather__temp-night">
      Night: <span class="weather__temp-night-value">${Math.round(tempNight)}&deg</span>
      </div>
      <div
        class="weather__description weather__description_margin-top-10px"
      >${main}
      </div>`;
    weatherDaily.append(divElem);
  });
}
