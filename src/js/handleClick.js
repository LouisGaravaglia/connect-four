import { HEIGHT, WIDTH, board } from "./makeBoard.js";
import { findSpotForCol, placeInTable, endGame } from "./utilityFunctions.js";
import { checkForWin } from "./checkForWin.js";

// - variable to keep track of who played which piece
let currPlayer = 1;

///////////////////////////////////////handleClick: handle click of column top to play piece */
const handleClick = (evt) => {
  // - get x from ID of clicked cell
  const x = +evt.target.id;

  // - get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // - place piece in board and add to HTML table
  placeInTable(y, x);

  // - check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // - function to use below to see if its a tie
  const allFillCheck = (val) => val === true;

  // - check if all cells in board are filled; if so call, call endGame
  if (board[0].every(allFillCheck)) alert("all filled!");

  // - switch players
  currPlayer === 1 ? (currPlayer = 2) : (currPlayer = 1);
};

export { handleClick, currPlayer };
