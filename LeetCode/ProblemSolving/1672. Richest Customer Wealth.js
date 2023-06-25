/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let mx = 0;
    accounts.forEach(ar=>{
        mx = Math.max(mx,ar.reduce((a,b)=>a+b,0));
    });
    return mx;
};