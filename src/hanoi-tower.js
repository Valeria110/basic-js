const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // for 8 disks, the puzzle requires (2 ** 8) − 1, or 255 transfers (from the article)
  const turns = 2 ** disksNumber - 1;
  // 3600 сек. - turnsSpeed
  // х сек.    - turns
  // х сек. = (turns * 3600) / turnsSpeed
  const seconds = Math.floor((turns * 3600) / turnsSpeed);
  const puzzleScore = {
    turns: turns,
    seconds: seconds
  }

  return puzzleScore;
}

module.exports = {
  calculateHanoi
};
