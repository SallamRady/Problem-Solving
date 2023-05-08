/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let idx = functions.length-1;
	return function(x) {
        while(idx >= 0){
            x = functions[idx](x);
            idx--;
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
