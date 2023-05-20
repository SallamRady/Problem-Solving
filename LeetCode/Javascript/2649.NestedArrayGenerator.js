/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  for (const ar of arr) {
    console.log("asd :", ar);
    if (Array.isArray(ar)) yield* inorderTraversal(ar);
    else yield ar;
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
