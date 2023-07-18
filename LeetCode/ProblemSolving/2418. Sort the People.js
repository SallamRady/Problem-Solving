/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let persons = [];
  for (let i = 0; i < names.length; i++) {
    persons.push({ name: names[i], height: heights[i] });
  }
  persons.sort((a, b) => b.height - a.height);
  return persons.map((ele) => ele.name);
};
