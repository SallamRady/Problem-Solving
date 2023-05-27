/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
  let p = [],
    n = [],
    result = 1,
    haveZero = false;
  nums.forEach((e) => {
    if (e > 0) p.push(e);
    else if (e < 0) n.push(e);

    if (e == 0) haveZero = true;
  });
  p.sort((a, b) => a - b);
  n.sort((a, b) => a - b);
  //console.log("p", p);
  //console.log("n", n);
  p.forEach((e) => {
    result *= e;
  });
  let len = n.length % 2 == 0 ? n.length : n.length - 1;
  for (let i = 0; i < len; i++) result *= n[i];

  if (p.length == 0 && n.length <= 1) {
    if (haveZero) result = 0;
    else result = n[0];
  }
  return result;
};
