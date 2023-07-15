/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  premRec(nums, [], res);
  return res;
};

const premRec = (nums, prefix, result) => {
  if (nums.length == 0) {
    result.push([...prefix]);
    return;
  }
  let reminderNums = [...nums];
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    reminderNums.splice(i, 1);
    prefix.push(c);
    premRec(reminderNums, prefix, result);
    reminderNums.unshift(c);
    prefix.pop();
  }
};
