import { HEIGHT, WIDTH, board } from "./makeBoard.js";
import { currPlayer } from "./handleClick";

/** findSpotForCol: given column x, return top empty y (null if filled) */

const findSpotForCol = (x) => {
  // TODO: write the real version of this, rather than always returning 0

  if (board[5][x] === null) {
    board[5][x] === true;
    return 5;
  } else if (board[4][x] === null) {
    board[4][x] === true;
    return 4;
  } else if (board[3][x] === null) {
    board[3][x] === true;
    return 3;
  } else if (board[2][x] === null) {
    board[2][x] === true;
    return 2;
  } else if (board[1][x] === null) {
    board[1][x] === true;
    return 1;
  } else if (board[0][x] === null) {
    board[0][x] === true;
    return 0;
  } else {
    return null;
  }
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
  board[y][x] = currPlayer;
};

/** endGame: announce game end */

const endGame = (msg) => {
  // TODO: pop up alert message
  alert(msg);
};

export { findSpotForCol, placeInTable, endGame };
