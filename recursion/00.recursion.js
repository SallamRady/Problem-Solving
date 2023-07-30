function factorial(num) {
  // base case
  if (num == 1) return 1;
  //recursive case
  return num * factorial(num - 1);
}

function callatz(num) {
  // base case
  if (num == 1) return 0;
  //recursive case
  if ((num & 1) == 1) return 1 + callatz(num * 3 + 1);
  return 1 + callatz(num / 2);
}

function fibonacci(num) {
  // base case
  if (num < 2) return num;
  //recursive case
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function twoPowerOfN(n) {
  // base case
  if (n == 1) return 2;
  //recursive case
  return 2 * twoPowerOfN(n - 1);
}

function expression1(nums, target, sum = 0, i = 0) {
  // base case
  if (i == nums.length) return sum == target;
  // recursive case
  let branch1 = expression1(nums, target, sum + nums[i], i++);
  let branch2 = expression1(nums, target, sum - nums[i], i++);

  return branch1 || branch2;
}
