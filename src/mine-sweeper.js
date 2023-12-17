const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (matrix.length === 0 || !matrix) {
    return [];
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  let mineBoard = [];

  matrix.forEach((row, rowInd) => {
    let newRow = [];

    row.forEach((_, colInd) => {
      let count = 0;

      for (let i = rowInd - 1; i <= rowInd + 1; i += 1) {
        for (let j = colInd - 1; j <= colInd + 1; j += 1) {

          if (!(i === rowInd && j === colInd) &&
            j < cols && j >= 0 &&
            i < rows && i >= 0) {
              if (matrix[i][j] === true) {
                count += 1;
              } else {
                count += 0;
              }
        }}
      }

      newRow.push(count);
    })
    mineBoard.push(newRow);
  })

  return mineBoard;
}

module.exports = {
  minesweeper
};
