const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = ('' + n).split('');
  let maxNumber = Number(arr.join('').slice(1));
  let num = 0;

  arr.forEach((item, index) => {
    let newArr = [...arr];
    newArr.splice(index, 1);
    num = Number(newArr.join(''));
    num > maxNumber ? maxNumber = num : maxNumber;
  })

  return maxNumber;
}

deleteDigit(7983472);

module.exports = {
  deleteDigit
};
