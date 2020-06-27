import { HEIGHT, WIDTH, board } from "./makeBoard.js";
import { findSpotForCol, placeInTable, endGame } from "./utilityFunctions.js";
import { checkForWin } from "./checkForWin.js";

/** handleClick: handle click of column top to play piece */
let currPlayer = 1;

const handleClick = (evt) => {
  // get x from ID of clicked cell
  const x = +evt.target.id;
  // console.log(x);

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  // console.log(y);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  if (currPlayer === 1) currPlayer = 2;
  else if (currPlayer === 2) currPlayer = 1;

  console.log(currPlayer);
  // console.log("this is change player " currPlayer);
  // console.log("this is current player " currPlayer);
};

export { handleClick, currPlayer };
