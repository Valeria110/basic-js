const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let repeatedLetterCount = 1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      repeatedLetterCount += 1;
    } else {
      repeatedLetterCount === 1 ? repeatedLetterCount = '' : repeatedLetterCount;

      encodedStr += `${repeatedLetterCount}${str[i]}`;
      repeatedLetterCount = 1;
    }
  }

  return encodedStr;
}

module.exports = {
  encodeLine
};
