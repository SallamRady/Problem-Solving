/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  this.key = true;
  return function (...args) {
    // return [{"calls":1,"value":fn()}]
    if (this.key) {
      this.key = false;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
