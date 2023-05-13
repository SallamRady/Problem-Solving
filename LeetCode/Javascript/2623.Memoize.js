/**
 * @param {Function} fn
 */

function memoize(fn) {
  let callCount = 0,
    history = {};

  const memoizedFn = function (...args) {
    let key = args.join("_");
    if (!(key in history)) {
      callCount++;
      history[key] = fn(...args);
    }
    return history[key];
  };
  memoizedFn.getCallCount = () => callCount;
  return memoizedFn;
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
