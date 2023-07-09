/**
 * @param {number[]} nums
 * @return {number}
 */
function getSubarrays(arr) {
  const subarrays = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      subarrays.push(arr.slice(i, j));
    }
  }
  return subarrays;
}

var alternatingSubarray = function (nums) {
  let subArrs = getSubarrays(nums),
    answer = -1;
  // m is greater than 1.
  subArrs = subArrs.filter((ar) => ar.length > 1);

  subArrs.forEach((arr) => {
    let key = true,
      valid = true;
    for (let i = 1; i < arr.length; i++) {
      if (key) {
        if (arr[i] - arr[i - 1] != 1) {
          valid = false;
          break;
        }
      } else {
        if (arr[i] - arr[i - 1] != -1) {
          valid = false;
          break;
        }
      }
      key = !key;
    }
    if (valid) {
      answer = Math.max(answer, arr.length);
      // console.log(arr)
    }
  });

  return answer;
};
