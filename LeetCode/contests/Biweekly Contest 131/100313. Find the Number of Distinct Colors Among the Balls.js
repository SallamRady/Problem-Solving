/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
// !! This Problem dont solved yet.
var queryResults = function (limit, queries) {
  const result = [];
  const colors = new Set();
  const positions = new Set();
  const map = {};

  for (let i = 0; i < queries.length; i++) {
    const [x, y] = queries[i];
    colors.add(y);
    positions.add(x);
    let key = `${x}_${y}`;
    map[key] = 1;
    result.push(
      colors.size == positions.size
        ? Object.keys(map).length
        : Math.min(colors.size, positions.size)
    );
  }

  return result;
};
