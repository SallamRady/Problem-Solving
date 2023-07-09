/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let col = coordinates.charCodeAt(0) - 96, 
        row = coordinates.charCodeAt(1) - 48, 
        white = false;
    
    if (col % 2 == 0) white = true;

    if (row % 2 == 0) white = !white;
    
    return white;
};