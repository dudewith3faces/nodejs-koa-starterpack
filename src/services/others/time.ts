export function now() {
  const ran = new Date();

  const month = monthFunc(ran.getMonth());
  const date = ran.getDate();
  const year = ran.getFullYear();
  const day = dateFunc(ran.getDate());
  const time = {
    hours: ran.getHours(),
    milliseconds: ran.getMilliseconds(),
    minutes: ran.getMinutes(),
    seconds: ran.getSeconds(),
  };
  return { month, date, year, day, time };
}

enum monthEnum {
  "January" = 0,
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
}

function monthFunc(num: number) {
  let mon: string;
  switch (num) {
    case 0:
      mon = "January";
      break;
    case 1:
      mon = "Febuary";
      break;
    case 2:
      mon = "March";
      break;
    case 3:
      mon = "April";
      break;
    case 4:
      mon = "May";
      break;
    case 5:
      mon = "June";
      break;
    case 6:
      mon = "July";
      break;
    case 7:
      mon = "August";
      break;
    case 8:
      mon = "September";
      break;
    case 9:
      mon = "October";
      break;
    case 10:
      mon = "November";
      break;
    case 11:
      mon = "December";
      break;
  }

  return mon;
}

function dateFunc(num: number) {
  let date: string;
  switch (num) {
    case 0:
      date = "Sunday";
      break;
    case 1:
      date = "Monday";
      break;
    case 2:
      date = "Tuesday";
      break;
    case 3:
      date = "Wednesday";
      break;
    case 4:
      date = "Thursday";
      break;
    case 5:
      date = "Friday";
      break;
    case 6:
      date = "Saturday";
      break;
  }
  return date;
}
