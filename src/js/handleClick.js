import { HEIGHT, WIDTH, currPlayer, board } from "./makeBoard.js";
import { findSpotForCol, placeInTable, endGame } from "./utilityFunctions.js";
import { checkForWin } from "./checkForWin.js";

/** handleClick: handle click of column top to play piece */
let changePlayer = currPlayer;

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
    return endGame(`Player ${changePlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  if (changePlayer === 1) changePlayer = 2;
  else if (changePlayer === 2) changePlayer = 1;

  console.log(changePlayer);
  // console.log("this is change player " changePlayer);
  // console.log("this is current player " currPlayer);
};

export { handleClick };
