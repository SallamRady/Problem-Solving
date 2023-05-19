/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  let jsonObj = {},
    idx = 0;
  let Kvalues = arr.map((obj) => getKey("", obj));
  Kvalues.map((ar) => {
    ar.forEach((element) => {
      //console.log("element ", idx, ":", element);
      if (element.key[0] in jsonObj) {
        jsonObj[element.key[0]].push({ v: element.obj, i: idx });
      } else {
        jsonObj[element.key[0]] = [{ v: element.obj, i: idx }];
      }
    });
    idx++;
  });
  const sortedKeys = Object.keys(jsonObj).sort();
  const sortedObject = {};
  sortedKeys.forEach((key) => {
    sortedObject[key] = jsonObj[key];
  });
  let matrix = Array.from({ length: arr.length + 1 }, () =>
    Array.from({ length: Object.keys(jsonObj).length }, () => "")
  );
  for (let i = 0; i < Object.keys(sortedObject).length; i++) {
    let k = Object.keys(sortedObject)[i];
    matrix[0][i] = k;
    sortedObject[k].forEach((item) => {
      matrix[item.i + 1][i] = item.v;
    });
  }
  return matrix;
};

function getKey(key, obj) {
  if (
    typeof obj === "number" ||
    typeof obj === "string" ||
    typeof obj === "boolean" ||
    obj === null
  ) {
    return { key: [key], obj };
  }
  let result = [];
  for (const [k, v] of Object.entries(obj)) {
    const newKey = key ? `${key}.${k}` : `${k}`;
    result.push(getKey(newKey, v));
  }
  return result.flat();
}
