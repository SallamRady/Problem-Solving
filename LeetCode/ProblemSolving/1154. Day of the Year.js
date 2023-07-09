/**
 * @param {string} date
 * @return {number}
 */
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
var dayOfYear = function (date) {
  const daysInMonth = {
    1: 31,
    2: 28, // or 29 in leap years
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let days = 0;
  let arr = date.split("-").map((n) => parseInt(n));
  if (isLeapYear(arr[0])) daysInMonth[2] = 29;
  for (let i = 1; i <= 12; i++) {
    if (i == arr[1]) {
      days += arr[2];
      break;
    }
    days += daysInMonth[i];
  }
  return days;
};
