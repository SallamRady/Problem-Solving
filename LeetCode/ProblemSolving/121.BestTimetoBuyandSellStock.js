/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length,
    mx,
    answer = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (i == len - 1) {
      mx = prices[i];
    } else {
      answer = Math.max(answer, mx - prices[i]);
      mx = Math.max(mx, prices[i]);
    }
    //console.log('ele :', prices[i], ' mx:', mx, ' answer :', answer);
  }
  return answer;
};
