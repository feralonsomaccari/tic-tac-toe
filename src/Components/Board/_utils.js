/**
 * Magic Square Algorithm
 * https://en.wikipedia.org/wiki/Magic_square
 *
 */

const magicSquare = [4, 9, 2, 3, 5, 7, 8, 1, 6];
const checkVictory = (player, board) => {
  // Rows
  for (let i = 0; i < 9; i++) {
    // Columns
    for (let j = 0; j < 9; j++) {
      // Diagonals
      for (let k = 0; k < 9; k++) {
        if (i !== j && i !== k && j !== k) {
          // Does a Player owns a line?
          if (board[i] === player && board[j] === player && board[k] === player) {
            // Is that line equal to the magic number?
            if (magicSquare[i] + magicSquare[j] + magicSquare[k] === 15) {
              return [i, j, k];
            }
          }
        }
      }
    }
  }
  return false;
};

module.exports = { checkVictory };
