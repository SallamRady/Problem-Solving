/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let n = items.length, counter = 0;
    for (let i = 0; i < n; i++) {
        const item = items[i];
        if (ruleKey == "type") {
            if (ruleValue == item[0]) counter++;
        } else if (ruleKey == "color") {
            if (ruleValue == item[1]) counter++;
        } else if (ruleKey == "name") {
            if (ruleValue == item[2]) counter++;
        }
    }
    return counter;
};