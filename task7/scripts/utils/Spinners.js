export class SpinnerCalendar {
  constructor() {
    this.calendar = document.querySelector(".calendar");
    this.calendarDays = document.querySelector(".calendar__days");
    this.spinner = document.createElement("img");
  }
  create() {
    this.calendarDays.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "300px";
    this.spinner.style.height = "300px";
    this.calendar.append(this.spinner);
  }
  remove() {
    this.spinner.remove();
    this.calendarDays.style.display = "flex";
  }
}

export class SpinnerScheduler {
  constructor() {
    this.deleteButton = document.querySelector(".delete__button");
    this.schedulerNotes = document.querySelector(".scheduler__notes");
    this.spinner = document.createElement("img");
  }
  create() {
    this.schedulerNotes.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "50px";
    this.spinner.style.height = "50px";
    this.deleteButton.before(this.spinner);
  }
  remove() {
    this.spinner.remove();
    this.schedulerNotes.style.display = "block";
  }
}

export class SpinnerWeather {
  constructor() {
    this.weather = document.querySelector(".weather");
    this.weatherDaily = document.querySelector(".weather__daily");
    this.weatherToday = document.querySelector(".weather__today");
    this.spinner = document.createElement("img");
  }
  create() {
    this.weatherDaily.style.display = "none";
    this.weatherToday.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "300px";
    this.spinner.style.height = "300px";
    this.weather.append(this.spinner);
  }
  remove() {
    this.spinner.remove();
    this.weatherDaily.style.display = "flex";
    this.weatherToday.style.display = "block";
  }
}
