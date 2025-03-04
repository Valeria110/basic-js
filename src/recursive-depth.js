const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // constructor() {
  //   this.depth = 0;
  // }

  calculateDepth(arr) {
    if (arr.length === 0) return 1;
    let depth = 0;

    for(const item of arr) {
        if (Array.isArray(item)) {
          depth = Math.max(depth, this.calculateDepth(item))
        }
      }

    depth += 1;
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
