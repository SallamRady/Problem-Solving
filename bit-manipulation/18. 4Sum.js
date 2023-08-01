/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function getBit(num, idx) {
  num = num >> idx;
  return num & 1;
}
// var fourSum = function (nums, target) {
//     let k = nums.length, history = {};
//     let answer = [];
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < (1 << k); i++) {
//         let sum = 0, arr = [], key = "";
//         for (let j = 0; j < k; j++) {
//             if (getBit(i, j) == 1) {
//                 sum += nums[j];
//                 key += (nums[j] + "_");
//                 arr.push(nums[j]);
//                 if(arr.length == 4)break;
//             }
//         }
//         if (sum == target && arr.length == 4 && !(key in history)) {
//             history[key] = key;
//             answer.push(arr);
//         }
//     }
//     // console.log(answer)
//     return answer;
// };

function fourSum(nums, target) {
  const n = nums.length;
  const history = {};
  let answer = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          const sum = nums[i] + nums[j] + nums[k] + nums[l];
          let key = nums[i] + "_" + nums[j] + "_" + nums[k] + "_" + nums[l];
          if (sum === target) {
            if (!(key in history)) {
              history[key] = key;
              answer.push([nums[i], nums[j], nums[k], nums[l]]);
            }
          }
        }
      }
    }
  }
  return answer;
}
