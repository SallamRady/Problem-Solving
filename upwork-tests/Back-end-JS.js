// TODO::remove unwanted chars
function removeInvalidChar(str) {
  let newStr = "";
  for (const c of str) {
    if (
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      c == "-" ||
      c == "_" ||
      c == ","
    )
      newStr += c;
  }
  newStr = newStr.replace(/--/g, "");
  return newStr;
}
// TODO::countOccurrences of word in a string
function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element == word) count++;
  }
  return count;
}

// todo::check char is isAlphabetic
function isAlphabetic(char) {
  return /^[A-Za-z]$/.test(char);
}

function findCombinationsFromText(str) {
  // TODO::declare and define helper variables
  let arr = str.split(",").map((ele) => removeInvalidChar(ele));
  let tags = ["Group", "Category", "Subcategory", "Make", "Model", "Diagram"],
    answer = [],
    prevTag = "",
    targetArr = [];

  // Start Proccessing again
  str = arr.join("");
  len = str.length;
  let words = str.split(/[^A-Za-z]+/);
  // * check each tag come zero or only once
  for (let i = 0; i < tags.length; i++) {
    let count = countOccurrences(words, tags[i]);
    if (count > 1) return []; //!invalid
  }

  arr = str.split("_");
  for (let i = 1; i < arr.length; i++) {
    let idx = 0;

    for (let tag of tags) {
      if (arr[i - 1].indexOf(tag) != -1) {
        idx = tags.indexOf(tag);
        prevTag = idx + "" + tag;
        break;
      }
    }

    for (let tag of tags) {
      if (arr[i].indexOf(tag) != -1) {
        idx = arr[i].indexOf(tag);
        break;
      }
    }

    let reminder = arr[i].substring(0, idx);
    if (i == arr.length - 1) {
      reminder = arr[i];
    }
    if (reminder[reminder.length - 1] == "-") reminder = reminder.slice(0, -1);
    answer.push(`${prevTag}_${reminder}`);
  }

  answer = answer.sort().map((ele) => ele.slice(1));

  for (let i = answer.length; i > 0; i--) {
    const temp = answer.slice(0, i);
    targetArr.push(temp);
  }
  return targetArr;
}

console.log(
  "Case 7",
  findCombinationsFromText(
    "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-Group_Test"
  )
);
// console.log("Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test")
