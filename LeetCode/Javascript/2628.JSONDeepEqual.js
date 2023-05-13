/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  //arraies
  if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length != o2.length) return false;
    for (let i = 0; i < o1.length; i++) {
      let equal = areDeeplyEqual(o1[i], o2[i]);
      if (!equal) return false;
    }
    return true;
  }
  if (Array.isArray(o1) || Array.isArray(o2)) return false;
  //objects and null
  let condation1 = typeof o1 === "object" && o1 != null;
  let condation2 = typeof o2 === "object" && o2 != null;
  if (!condation1 && !condation2) return o1 === o2;
  if (condation1 ^ condation1) return false;

  //object keys
  if (Object.entries(o1).length != Object.entries(o2).length) return false;

  for (const [key, value] of Object.entries(o1)) {
    if (!(key in o2)) return false;

    let equal = areDeeplyEqual(value, o2[key]);
    if (!equal) return false;
  }
  return true;
};

console.log(
  areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] })
);
