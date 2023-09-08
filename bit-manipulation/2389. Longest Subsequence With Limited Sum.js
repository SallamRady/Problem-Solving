//index from right / 0-based
function getBit(num, idx) {
    num = num >> idx;
    return num & 1;
}

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
// var answerQueries = function (nums, queries) {
//     let n = nums.length, k = n, temp = [], cnt = 0, answer = [], sum = 0, m = queries.length;

//     for (let l = 0; l < m; l++) {
//         //bitmask
//         temp = [];
//         for (let i = 0; i < (1 << k); i++) {
//             sum = 0; cnt = 0;
//             for (let j = 0; j < n; j++) {
//                 if (getBit(i, j)) {
//                     sum += nums[j];
//                     cnt++;
//                 }
//             }
//             if (sum <= queries[l]) temp.push(cnt);
//         }
//         answer.push(Math.max(...temp));
//     }
//     return answer;
// };

function answerQueries(nums, queries) {
  const n = nums.length;
  const m = queries.length;

  nums.sort((a, b) => a - b); // Sort nums in non-decreasing order

  const answer = new Array(m);

  for (let i = 0; i < m; i++) {
    let sum = 0;
    let count = 0;

    for (let j = 0; j < n; j++) {
      sum += nums[j];

      if (sum <= queries[i]) {
        count++;
      } else {
        break;
      }
    }

    answer[i] = count;
  }

  return answer;
}