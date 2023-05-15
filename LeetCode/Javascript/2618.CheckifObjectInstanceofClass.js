/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj == undefined) return false;
  if (obj == null) return false;

  while (obj !== null) {
    if (obj.constructor === classFunction) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
