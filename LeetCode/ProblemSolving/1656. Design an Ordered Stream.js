/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.array = new Array(n).fill(null);
  this.ptr = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.array[idKey - 1] = value;
  let temp = [];
  while (this.array[this.ptr] != null) {
    temp.push(this.array[this.ptr]);
    this.ptr++;
  }
  return temp;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
