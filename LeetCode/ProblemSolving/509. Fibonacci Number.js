/**
 * @param {number} n
 * @return {number}
 */

function Fibonacci(n) {
  if (n <= 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
var fib = function (n) {
  return Fibonacci(n);
};
