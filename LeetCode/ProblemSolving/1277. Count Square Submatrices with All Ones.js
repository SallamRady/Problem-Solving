/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    if (!matrix || matrix.length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let count = 0;
    
    // Create a copy of the matrix that we'll use as DP table
    const dp = Array(rows).fill().map(() => Array(cols).fill(0));
    
    // Process first row and column (base cases)
    for (let i = 0; i < rows; i++) {
        dp[i][0] = matrix[i][0];
        count += dp[i][0];
    }
    
    for (let j = 1; j < cols; j++) {
        dp[0][j] = matrix[0][j];
        count += dp[0][j];
    }
    
    // Process rest of the matrix
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 1) {
                // The value at dp[i][j] represents the side length of the largest
                // square ending at position (i,j)
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                count += dp[i][j];
            }
        }
    }
    
    return count;
};

// test cases
console.log(countSquares([[0,1,1,1],[1,1,1,1],[0,1,1,1]])); // 15
console.log(countSquares([[1,0,1],[1,1,0],[1,1,0]])); // 7
