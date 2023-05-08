/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let f0 = 0,
    f1 = 1;
  for (let i = 0; i <= 50; i++) {
    switch (i) {
      case 0:
        yield f0;
        break;
      case 1:
        yield f1;
        break;
      default:
        let temp = f0 + f1;
        f0 = f1;
        f1 = temp;
        yield temp;
    }
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
