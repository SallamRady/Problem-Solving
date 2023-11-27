/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
    // declaration
    let m = mat[0].length,n = mat.length,valid = true;


    for (let i = 0, j = k; i < m; i++,j++) {
        j = (j%m);
        for(let l = 0;l < n;l++){
            if(mat[l][i] != mat[l][j])return false;
        }
    }
    return true; 
};