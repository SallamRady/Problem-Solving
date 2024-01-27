/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */

function longestString(x, y, z) {
  let mn = parseInt(Math.min(x, y));
  let answer = (mn * 4);
  x -= mn;
  y -= mn;
  if(x > 0 || y > 0){
    answer +=4;
    z--;
  }
//   let reminder = parseInt(Math.max(x,y));
//   mn = parseInt(Math.min(reminder, z));
//   answer += mn * 4;
//   reminder -= mn;
//   z -= mn;
  answer += (z * 2);
  return answer;
}

console.log(longestString(1, 5, 2)); //12
console.log(longestString(3, 2, 2)); //14
console.log(longestString(1, 39, 14)); //34
