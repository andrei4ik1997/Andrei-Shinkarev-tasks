import { month } from ".";

export function getDate(date) {
  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
}
