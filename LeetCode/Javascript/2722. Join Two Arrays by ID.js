/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let arr = [], frq = {};
    let input = arr1.concat(arr2);
    let n = input.length;
    for (let i = 0; i < n; i++) {
        if (!(input[i].id in frq)) {
            arr.push(input[i]);
            frq[input[i].id] = input[i].id;
        } else {
            arr = arr.map(ele => {
                if (ele.id != input[i].id) return ele;
                let len1 = Object.keys(ele);
                let len2 = Object.keys(input[i]);
                let mxObj = len1 > len2 ? ele : input[i];
                let mnObj = len1 < len2 ? ele : input[i];
                let newObj = {};
                for (let key in mxObj) {
                    if (key in mnObj) {
                        if (mnObj[key] > mxObj[key]) {
                            newObj[key] = mnObj[key];
                        } else {
                            newObj[key] = mnObj[key];
                        }
                    } else {
                        newObj[key] = mxObj[key];
                    }
                }
                // console.log(newObj)
                return newObj;
            });
        }
    }
    arr.sort((a, b) => a.id - b.id);
    return arr;
};