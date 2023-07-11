/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function countBits1(num) {
    let counter = 0;
    while (num) {
      counter++;
      num = num & (num - 1); //remove first 1 from right
    }
    return counter;
  }
  var hammingDistance = function(x, y) {
      return countBits1(x^y);
  };