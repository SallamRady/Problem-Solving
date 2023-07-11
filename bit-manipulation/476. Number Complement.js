/**
 * @param {number} num
 * @return {number}
 */
function countBits(num) {
  let counter = 0;
  while (num) {
    counter++;
    num = num >> 1; //remove first 1 from right
  }
  return counter;
}
var findComplement = function (num) {
  let mask = (1 << countBits(num)) - 1;
  return num ^ mask;
};
