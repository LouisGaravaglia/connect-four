const WIDTH = 7;
const HEIGHT = 6;

// - new array for the height length (board[y][x])
const board = new Array(HEIGHT);

// - setting up the 2D array for the board
const makeBoard = () => {
  for (let i = 0; i < HEIGHT; i++) {
    //  - new array for the width length (board[y][x])
    board[i] = new Array(WIDTH);
  }

  for (let j = 0; j < WIDTH; j++) {
    for (let k = 0; k < HEIGHT; k++) {
      board[k][j] = null;
    }
  }
};

// - running the makeBoard function so that makeHtmlBoard function can add rows/columns accordinly
makeBoard();

export { WIDTH, HEIGHT, board };
