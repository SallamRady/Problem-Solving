/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  let answer = [],
    map = {},
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      count++;
    }
    if (!(count in map)) {
      map[count] = i;
    }
  }

  for (let query of queries) {
    if (map[query] != undefined) answer.push(map[query]);
    else answer.push(-1);
  }

  return answer;
};

let nums = [1, 3, 1, 7],
  queries = [1, 3, 2, 4],
  x = 1;
console.log(occurrencesOfElement(nums, queries, x));
