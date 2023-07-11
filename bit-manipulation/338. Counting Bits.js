/**
 * @param {number} n
 * @return {number[]}
 */
function countBits1(num) {
  let counter = 0;
  while (num) {
    counter++;
    num = num & (num - 1); //remove first 1 from right
  }
  return counter;
}
var countBits = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(countBits1(i));
  }
  return arr;
};
