/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let n = grid.length,
      answer = [],
      temp = [],
      temp2 = [],
      mx;
  
    for (let i = 0; i < n-2; i++) {
      temp = [];
      temp2 = [];
      console.log("----------------");
      for (let j = 0; j < n-2; j++) {
        mx = -1;
        for (let r = i; r < n && r < i + 3; r++) {
          for (let c = j; c < n && c < j + 3; c++) {
            temp2.push(grid[r][c]);
            if (grid[r][c] > mx) {
              mx = grid[r][c];
            }
          }
        }
        console.log(temp2);
        temp.push(mx);
      }
      answer.push(temp);
    }
  
    return answer;
  };
  