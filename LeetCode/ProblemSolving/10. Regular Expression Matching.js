/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let n = s.length,m = p.length;
    let arr = Array.from({length:n+1},()=>Array(m+1).fill(false));
    
    arr[0][0] = true;
    for (let j = 1; j <= m; j++) {
        if (p[j-1] == '*') arr[0][j] = arr[0][j-2];
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (p[j-1] == '.' || p[j-1] == s[i-1]) {
                arr[i][j] = arr[i-1][j-1];
            } else if (p[j-1] == '*') {
                arr[i][j] = arr[i][j-2] || (arr[i-1][j] && (s[i-1] == p[j-2] || p[j-2] == '.'));
            } else {
                arr[i][j] = false;
            }
        }
    }

    return arr[n][m];
};