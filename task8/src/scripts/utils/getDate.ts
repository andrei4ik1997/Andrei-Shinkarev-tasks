import { month } from "./constantValues";

export function getDate(date: Date): string {
  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
}
