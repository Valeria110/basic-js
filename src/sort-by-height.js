const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  arr.forEach(item => item > 0 ? newArr.push(item) : item);
  newArr.sort((a, b) => a - b);

  arr.forEach((item, index) => item < 0 ? newArr.splice(index, 0, -1) : item);

  return newArr;
}


sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

module.exports = {
  sortByHeight
};
