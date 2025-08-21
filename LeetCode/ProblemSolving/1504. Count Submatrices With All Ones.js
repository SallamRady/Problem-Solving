/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
    if (!mat || mat.length === 0 || mat[0].length === 0) {
        return 0;
    }
    
    const rows = mat.length;
    const cols = mat[0].length;
    let totalCount = 0;
    
    // heights[j] represents the number of consecutive 1s from current row up to row i at column j
    const heights = new Array(cols).fill(0);
    
    for (let i = 0; i < rows; i++) {
        // Update heights for the current row
        for (let j = 0; j < cols; j++) {
            // If current cell is 1, increase height, otherwise reset to 0
            heights[j] = mat[i][j] === 1 ? heights[j] + 1 : 0;
        }
        
        // Count submatrices ending at each position in the current row
        totalCount += countSubmatricesInRow(heights);
    }
    
    return totalCount;
};

/**
 * Helper function to count submatrices for the current histogram row
 * @param {number[]} heights - Histogram of consecutive 1s
 * @return {number} - Number of submatrices in this row
 */
function countSubmatricesInRow(heights) {
    const n = heights.length;
    let count = 0;
    
    for (let j = 0; j < n; j++) {
        // For each position, we can form submatrices with width limited by the minimum height
        // as we expand to the left
        let currentHeight = heights[j];
        count += currentHeight; // Submatrices with width 1
        
        // Expand to the left and count additional submatrices
        let minHeight = currentHeight;
        for (let k = j - 1; k >= 0; k--) {
            minHeight = Math.min(minHeight, heights[k]);
            if (minHeight === 0) break;
            count += minHeight;
        }
    }
    
    return count;
}

