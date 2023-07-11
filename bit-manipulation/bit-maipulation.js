function decimalToBinary(num, res = "") {
  if (num <= 1) {
    console.log(num);
    return res;
  }
  decimalToBinary(parseInt(num / 2), res);
  console.log(num % 2);
}

function isOdd(num) {
  return num & 1;
}

function countBits1(num) {
  let counter = 0;
  while (num) {
    counter++;
    num = num & (num - 1); //remove first 1 from right
  }
  return counter;
}

function countBits(num) {
  let counter = 0;
  while (num) {
    counter++;
    num = num >> 1; //remove first 1 from right
  }
  return counter;
}

function findComplement(num) {
  let mask = (1 << countBits(num)) - 1;
  return num ^ mask;
}

//index from right / 0-based
function getBit(num, idx) {
  num = num >> idx;
  return num & 1;
}

function setBit1(num, idx) {
  return num | (1 << idx);
}

function setBit0(num, idx) {
  return num & ~(1 << idx);
}

function flibBit(num, idx) {
  return num ^ (1 << idx);
}

function isPowerOf2(num) {
  let cnt = countBits1(num);
  return cnt == 1;
}

function numOfBits(num) {
  let cnt = 1;
  while (1 << cnt < num) {
    cnt++;
  }
  return cnt;
}

function makeFirst1to0(num) {
  return num & (num - 1);
}

function lastBit1Value(num) {
  return num & ~(num - 1);
}

console.log(lastBit1Value(22));
