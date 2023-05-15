/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  let answer = {},
    key;
  for (let item of this) {
    console.log("item", item);
    key = fn(item);
    if (key in answer) {
      answer[key].push(item);
    } else {
      answer[key] = [];
      answer[key].push(item);
    }
  }

  return answer;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
