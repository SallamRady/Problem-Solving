/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let counter = 0;
    hours.forEach(h => {
        if (h >= target) counter++;
    })
    return counter;
};