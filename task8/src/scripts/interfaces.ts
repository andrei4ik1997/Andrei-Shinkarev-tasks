export interface Config {
  firstDayWeek: string;
  firstHoliday: string;
  secondHoliday: string;
  showLastDays: boolean;
  showNextDays: boolean;
  scheduler: boolean;
}

export interface Note {
  year: number;
  month: number;
  day: number;
  value: string;
}

export interface Post {
  id: number;
  year: number;
  month: number;
  day: number;
  value: string;
}

export interface Weather {
  current: WeatherProperty;
  daily: Array<WeatherProperty>;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export interface WeatherProperty {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like:
    | number
    | { day: number; night: number; eve: number; morn: number };
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp:
    | number
    | {
        day: number;
        eve: number;
        max: number;
        min: number;
        morn: number;
        night: number;
      };
  uvi: number;
  visibility: number;
  weather: [{ description: string; icon: string; id: number; main: string }];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface ParamsCreateDay {
  date: Date;
  firstDayWeek: string;
  restDays: Array<{ day: number; month: number }>;
  notes: Array<{
    id: number;
    day: number;
    month: number;
    year: number;
    value: string;
  }>;
}
export interface ParamsCreateDiv {
  divClass: string;
  innerText: string | number;
  parentDiv?: string;
}

export interface ParamsCreateHolidays {
  firstHoliday: string;
  secondHoliday: string;
  firstDayWeek: string;
}
