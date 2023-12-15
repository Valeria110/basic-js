const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity && typeof(sampleActivity) === 'string' &&
    Number(sampleActivity) > 0 && Number(sampleActivity) < 15) {
  // N0/N = A0/A
  const n0DivideN = MODERN_ACTIVITY / Number(sampleActivity);
  // K = In/t
  const In = 0.693;
  const k = (In / HALF_LIFE_PERIOD * 10 ** 4);;
  const t = Math.ceil( ( Math.log(n0DivideN) / k) * 10000);
  console.log(t);

  return t;
    }

  return false;
}

dateSample('8');

module.exports = {
  dateSample
};
