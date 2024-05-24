/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  let n = students.length,
    counter = 0;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (seats[i] != students[i]) {
      counter += Math.abs(seats[i] - students[i]);
    }
  }

  return counter;
};
