const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [...arr];
  const obj = {
    array: newArr,
    discardNext: function(index) {
      if (this.array[index + 2] === '--double-prev' || this.array[index + 2] === '--discard-prev') {
        this.array.splice(index + 2, 1);
        if (this.array[index + 1]) {
          this.array.splice(index, 1);
          this.array.splice(index, 1);
        }
      } else {
        this.array.splice(index, 1);
      }
    },
    discardPrev: function(index) {
      if (this.array[index - 1] && index !==0) {
        this.array.splice(index, 1);
        this.array.splice(index - 1, 1);
      } else {
        this.array.splice(index, 1);
      }
    },
    doubleNext: function(index) {
      if (this.array[index + 1]) {
        this.array.splice(index, 1, this.array[index + 1]);
      } else {
        this.array.splice(index, 1);
      }
    },
    doublePrev: function(index) {
      if (this.array[index - 1]) {
        this.array.splice(index, 1, this.array[index - 1]);
      } else {
        this.array.splice(index, 1);
      }
    },
    transformArray: function() {
      this.array.map((item, i) => {
        if (item === '--discard-next') console.log('--discard-next', this.discardNext(i), this.array);
        if (item === '--discard-prev') console.log('--discard-prev', this.discardPrev(i), this.array);
        if (item === '--double-next') console.log('--double-next', this.doubleNext(i), this.array);
        if (item === '--double-prev') console.log('--double-prev', this.doublePrev(i), this.array);
      });

      return this.array;
    }
  }

  return obj.transformArray();
}


module.exports = {
  transform
};
