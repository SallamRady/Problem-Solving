/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let pending = false,
    nextArgs;

  const throttled = (...args) => {
    nextArgs = args;
    if (!pending) {
      fn(...args);
      pending = true;
      nextArgs = undefined;
      setTimeout(() => {
        pending = false;
        if (nextArgs) throttled(...nextArgs);
      }, t);
    }
  };

  return throttled;
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
