export function getTime(date: Date): string {
  let time: Array<string> = [String(date.getHours()), String(date.getMinutes()), String(date.getSeconds())];
  if (Number(time[0]) < 10) {
    time[0] = "0" + time[0];
  }
  if (Number(time[1]) < 10) {
    time[1] = "0" + time[1];
  }
  if (Number(time[2]) < 10) {
    time[2] = "0" + time[2];
  }
  return time.join(":");
}
