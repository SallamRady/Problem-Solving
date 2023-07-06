/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let nums = [];

  nums.push(first);
  encoded.forEach((e) => {
    let x = e ^ first;
    first = x;
    nums.push(first);
  });

  return nums;
};
