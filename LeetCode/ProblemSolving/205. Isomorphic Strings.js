/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // Need to check mappings in both directions
    if (s.length !== t.length) return false;
    
    // Maps for tracking character mappings in both directions
    const sToT = new Map();
    const tToS = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        // Check if s->t mapping exists and is consistent
        if (sToT.has(charS)) {
            if (sToT.get(charS) !== charT) {
                return false; // Inconsistent mapping
            }
        } 
        // Check if t->s mapping exists and is consistent
        else if (tToS.has(charT)) {
            return false; // Character in t is already mapped to a different char in s
        }
        // Create new mappings in both directions
        else {
            sToT.set(charS, charT);
            tToS.set(charT, charS);
        }
    }
    
    return true;    
};

// test cases
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true