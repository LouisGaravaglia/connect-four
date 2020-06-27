import { HEIGHT, WIDTH, currPlayer, board } from "./makeBoard.js";

/** findSpotForCol: given column x, return top empty y (null if filled) */

const findSpotForCol = (x) => {
  // TODO: write the real version of this, rather than always returning 0
  return 0;
};

/** placeInTable: update DOM to place piece into HTML table of board */

const placeInTable = (y, x) => {
  // TODO: make a div and insert into correct table cell
  const piece = document.createElement("div");
  piece.classList.add("piece");
  if (currPlayer === 1) piece.classList.add("p1");
  else if (currPlayer == 2) piece.classList.add("p2");
  const cell = document.getElementById(`${y}-${x}`);
  cell.append(piece);
};

/** endGame: announce game end */

const endGame = (msg) => {
  // TODO: pop up alert message
};

export { findSpotForCol, placeInTable, endGame };
