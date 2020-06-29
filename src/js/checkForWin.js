import { HEIGHT, WIDTH, board } from "./makeBoard.js";
import { currPlayer } from "./handleClick";

///////////////////////////////////////////////checkForWin: check board cell-by-cell for "does a win start here?"
const checkForWin = () => {
  // Check four cells to see if they're all color of current player
  function _win(cells) {
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    return cells.every(
      ([y, x]) =>
        // - checking to make sure the y value is on the board and not negative
        y >= 0 &&
        // - checking to make sure the y value is on the board and not greater than height
        y < HEIGHT &&
        // - checking to make sure the x value is on the board and not negative
        x >= 0 &&
        // - checking to make sure the x value is on the board and not greater than width
        x < WIDTH &&
        // - checking the value of each array (since cell is an array of 4 arrays) to see if each of those contains all 1's or all 2's
        board[y][x] === currPlayer
    );
  }

  // nested for loop to constantly check all cells in board
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // horiz variable to store the value of x and y coordinates that would check 4 spots in any row
      var horiz = [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ];
      // vert variable to store the value of x and y coordinates that would check 4 spots in any column
      var vert = [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ];
      // diagDR variable to store the value of x and y coordinates that would check 4 spots in a diagonal going up to right
      var diagDR = [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 2],
        [y + 3, x + 3],
      ];
      // diagDR variable to store the value of x and y coordinates that would check 4 spots in a diagonal down to left
      var diagDL = [
        [y, x],
        [y + 1, x - 1],
        [y + 2, x - 2],
        [y + 3, x - 3],
      ];

      // conditional to use the above _win function to then check if any of those varibales would return true if passed in as arguments
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
};

export { checkForWin };
