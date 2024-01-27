function generatePermutations(nums) {
  const result = [];

  function backtrack(nums, current) {
    if (current.length === nums.length) {
      result.push(current.slice()); // Make a copy of the current permutation
      return;
    }

    for (let num of nums) {
      if (current.includes(num)) {
        continue; // Skip numbers already in the current permutation
      }

      current.push(num);
      backtrack(nums, current);
      current.pop();
    }
  }

  backtrack(nums, []);

  return result;
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  let nums = Array.from({ length: n }, (_, index) => index + 1);
  let permutations = generatePermutations(nums);
  let len = permutations?.length,
    arr = null,
    m = null,
    count = 0,
    answer = 0;

  for (let i = 0; i < len; i++) {
    arr = permutations[i];
    m = arr.length;
    count = 0;
    for (let j = 1; j < m; j++) {
      for (let k = 0; k < j; k++) {
        if (arr[k] > arr[j]) count++;
      }
    }
    if (count == k) {
      answer++;
    }
  }
  return answer;
};
// Example usage:
console.log(kInversePairs(3, 0));
