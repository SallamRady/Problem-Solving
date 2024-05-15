function Fibonacci(n) {
  let base0 = 0,
    base1 = 1,
    temp = 0,
    answer = [];

  for (let i = 0; i < n; i++) {
    switch (i) {
      case 0:
        answer.push(base0);
        break;
      case 1:
        answer.push(base1);
        break;
      default:
        temp = base0 + base1;
        answer.push(temp);
        base0 = base1;
        base1 = temp;
        break;
    }
  }

  return answer;
}

///test
let arr = Fibonacci(5);
console.log(arr);
