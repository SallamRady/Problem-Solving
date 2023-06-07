var MyQueue = function () {
  this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.data.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.data.length) {
    let temp = this.data[0];
    this.data.shift();
    return temp;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.data.length) return this.data[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.data.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
