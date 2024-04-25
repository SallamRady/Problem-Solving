function StringChallenge(str) {
  // declare and define our helpers variables
  let len = str.length,
    romainNumbersMap = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    },
    strVal = 0,
    newStr = "";

  // calc str value
  for (let i = 0; i < len; i++) {
    strVal += romainNumbersMap[str[i]];
  }

  //generate new str
  for (let k in romainNumbersMap) {
    while (strVal >= romainNumbersMap[k]) {
      newStr += k;
      strVal -= romainNumbersMap[k];
    }
  }
  // code goes here
  return newStr;
}

// keep this function call here
console.log(StringChallenge(readline()));
