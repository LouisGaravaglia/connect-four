import { HEIGHT, WIDTH, currPlayer, board } from "./makeBoard.js";

/** findSpotForCol: given column x, return top empty y (null if filled) */

const findSpotForCol = (x) => {
  // TODO: write the real version of this, rather than always returning 0
  return 0;
};

/** placeInTable: update DOM to place piece into HTML table of board */

const placeInTable = (y, x) => {
  // TODO: make a div and insert into correct table cell
};

/** endGame: announce game end */

const endGame = (msg) => {
  // TODO: pop up alert message
};

export { findSpotForCol, placeInTable, endGame };
