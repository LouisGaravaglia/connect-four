const WIDTH = 7;
const HEIGHT = 6;

const currPlayer = 1; // active player: 1 or 2
const board = new Array(HEIGHT); // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

const makeBoard = () => {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array

  for (let i = 0; i < HEIGHT; i++) {
    board[i] = new Array(WIDTH);
  }

  for (let j = 0; j < WIDTH; j++) {
    for (let k = 0; k < HEIGHT; k++) {
      board[k][j] = null;
    }
  }
};

makeBoard();
// console.log(board);
export { WIDTH, HEIGHT, currPlayer, board };
