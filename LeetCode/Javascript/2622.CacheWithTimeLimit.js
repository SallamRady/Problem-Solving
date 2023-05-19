var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let accessible = !this.isExpired(key) && this.cache.hasOwnProperty(key);
  this.cache[key] = { value, duration: duration + Date.now() };
  return accessible;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return !this.isExpired(key) && this.cache[key] ? this.cache[key].value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let counter = 0;
  Object.keys(this.cache).forEach((k) => {
    if (!this.isExpired(k)) counter++;
  });
  return counter;
};

TimeLimitedCache.prototype.isExpired = function (key) {
  return Date.now() - this.cache[key]?.duration >= 0;
};
/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
