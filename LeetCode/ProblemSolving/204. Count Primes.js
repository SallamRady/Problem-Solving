/**
 * @param {number} n
 * @return {number}
 */
var isPrime = (n) => {
    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
function sieve_of_eratosthenes(n) {
    let answer = 0;
    let is_prime = new Array(n + 1).fill(true);

    is_prime[0] = is_prime[1] = false;
    for (let p = 2; p * p <= n; p++) {
        if (is_prime[p]) {
            for (let i = p * p; i <= n; i += p) {
                is_prime[i] = false;
            }
        }
    }

    for (let i = 2; i <= n; i++) {
        if (is_prime[i]) {
            answer++;
        }
    }
    return answer;
}

var countPrimes = function (n) {
   return sieve_of_eratosthenes(n);
};