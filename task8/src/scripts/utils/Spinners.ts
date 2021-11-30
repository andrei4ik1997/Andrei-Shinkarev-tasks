export class SpinnerCalendar {
  calendar: HTMLElement = document.querySelector(".calendar");
  calendarDays: HTMLElement = document.querySelector(".calendar__days");
  spinner: HTMLImageElement = document.createElement("img");

  public create(): void {
    this.calendarDays.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "300px";
    this.spinner.style.height = "300px";
    this.calendar.append(this.spinner);
  }
  public remove(): void {
    this.spinner.remove();
    this.calendarDays.style.display = "flex";
  }
}

export class SpinnerScheduler {
  deleteButton: HTMLElement = document.querySelector(".scheduler__button");
  schedulerNotes: HTMLElement = document.querySelector(".scheduler__notes");
  spinner: HTMLImageElement = document.createElement("img");

  public create(): void {
    this.schedulerNotes.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "50px";
    this.spinner.style.height = "50px";
    this.deleteButton.before(this.spinner);
  }
  public remove(): void {
    this.spinner.remove();
    this.schedulerNotes.style.display = "block";
  }
}

export class SpinnerWeather {
  weather: HTMLElement = document.querySelector(".weather");
  weatherDaily: HTMLElement = document.querySelector(".weather__daily");
  weatherToday: HTMLElement = document.querySelector(".weather__header");
  spinner: HTMLImageElement = document.createElement("img");

  public create(): void {
    this.weatherDaily.style.display = "none";
    this.weatherToday.style.display = "none";
    this.spinner.src = "./images/spinner.svg";
    this.spinner.style.width = "300px";
    this.spinner.style.height = "300px";
    this.weather.append(this.spinner);
  }
  public remove(): void {
    this.spinner.remove();
    this.weatherDaily.style.display = "flex";
    this.weatherToday.style.display = "block";
  }
}
