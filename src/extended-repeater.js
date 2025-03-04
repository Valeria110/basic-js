const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  let additionalString = [];
  let finishedString = [];

  for (let i = 0; i < additionRepeatTimes; i += 1) {
    additionalString.push(String(addition));
  }
  additionalString = additionalString.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i += 1) {
    finishedString.push(String(str) + additionalString);
  }
  finishedString = finishedString.join(separator)

  return finishedString;
}

repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
module.exports = {
  repeater
};
