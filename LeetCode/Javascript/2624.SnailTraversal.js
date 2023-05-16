/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  let arr = [],
    temp = [],
    SnailledArr = [];
  let idx = 0,
    key = true;
  if (rowsCount * colsCount !== this.length) return [];
  for (let i = 0; i < colsCount; i++) {
    temp = [];
    for (let j = 0; j < rowsCount; j++) {
      if (key) temp.push(this[idx]);
      else temp.unshift(this[idx]);
      idx++;
    }
    arr.push(temp);
    key = !key;
  }

  for (let j = 0; j < rowsCount; j++) {
    temp = [];
    for (let i = 0; i < colsCount; i++) {
      temp.push(arr[i][j]);
      // console.log(arr[i][j]);
    }
    // console.log('temp :', temp);
    SnailledArr.push(temp);
  }
  return SnailledArr;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
