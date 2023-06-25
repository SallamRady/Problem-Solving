/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getFactors = (n) => {
    let factors = [];
    for (let i = 1; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i == 0) {
            factors.push(i);
            if (i != parseInt(n / i)) {
                factors.push(n / i);
            }
        }
    }
    return factors;
}
var commonFactors = function (a, b) {
    let Afactors = getFactors(a);
    let Bfactors = getFactors(b);
    let counter = 0;
    Bfactors.forEach(n=>{
        if(Afactors.indexOf(n) >= 0)counter++
    })

    return counter;
};