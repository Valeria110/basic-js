const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date || date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (date instanceof Date) {
    try {
      const month = date.getMonth();
      date.valueOf();
  /* 11,0, 1 - winter
     2, 3, 4 - spring
     5, 6, 7 = summer
     8, 9, 10 - autumn
  */
  if ( month >= 0 && month < 2 || month === 11) {
    return 'winter';
  }
  if ( month > 1 && month < 5) {
    return 'spring';
  }
  if ( month > 4 && month < 8) {
    return 'summer';
  }
  if ( month > 7 && month < 11) {
    return 'autumn';
  }
    } catch {
      throw new Error('Invalid date!');
    }
  }

  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
