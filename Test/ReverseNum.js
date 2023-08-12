/**
 * You will given a number and revers the number
 * examples
 * 
 * input:124
 * output:421
 * --------------
 * input:130
 * output:31
 * 
 */
function reverseNum(num) {
    let result = "";
    while (num) {
        let digit = String(num % 10);
        if (digit != '0')
            result += digit;
        num = parseInt(num / 10);
    }
    // console.log(result);
    return result;
}

/**
 * you will given number s,k where 0 <= s,k <= 10^3
 * you should return how many way to get x,y,z where
 * ->x+y+z=s && -> 0<= x,y,z<=k
 * 
 * Note you solution have execution time < 10^8 
 */
function fun(s, k) {
    let count = 0;
    for (let x = 0; x <= k; x++) {
        for (let y = 0; y <= k; y++) {
            let z = s - (y + x);
            if ((x + y + z) == s) count++;
        }
    }
    return count;
}

/**
 * filer array according age >=18
 */
const persons = [
    { name: "person 1", age: 11 },
    { name: "person 2", age: 10 },
    { name: "person 3", age: 19 },
    { name: "person 4", age: 18 },
    { name: "person 5", age: 25 },
    { name: "person 6", age: 17 },
    { name: "person 7", age: 30 },
    { name: "person 8", age: 8 },
]

// what is the diffrance between let , var and const
// what does reduce do in js?


reverseNum(123);
reverseNum(120);