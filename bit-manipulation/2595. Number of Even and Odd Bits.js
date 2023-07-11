/**
 * @param {number} n
 * @return {number[]}
 */
function getBit(num, idx) {
    num = num >> idx;
    return num & 1;
  }
  var evenOddBit = function(n) {
      let odd= 0,even = 0,idx = 0;
      while(n){
          if(getBit(n,0) == 1){
              if(idx%2 == 0)even++;
              else odd++;
          }
          n >>=1;
          idx++;
      }
      return [even,odd]
  };