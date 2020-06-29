import { HEIGHT, WIDTH, board } from "./makeBoard.js";
import { currPlayer } from "./handleClick";

//////////////////////////////////////////findSpotForCol: given column x, return top empty y (null if filled)
const findSpotForCol = (x) => {
  // Loop over arrays withing board to find available spot in column
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

///////////////////////////////////////////placeInTable: update DOM to place piece into HTML table of board
const placeInTable = (y, x) => {
  // - make a div element to add to the board
  const piece = document.createElement("div");
  // - add a class of piece to applying styling
  piece.classList.add("piece");
  // - conditional to check which styling to apply for player1 v player2 styling
  if (currPlayer === 1) piece.classList.add("p1");
  // - conditional to check which styling to apply for player1 v player2 styling
  else if (currPlayer == 2) piece.classList.add("p2");
  // - get a hold of the data cell to insert the div/player piece
  const cell = document.getElementById(`${y}-${x}`);
  // - append that piece inside the cell
  cell.append(piece);
  // - set the value in the board array to either be 1 or 2 depending on which player played it, this will be intergral in deciding who won
  board[y][x] = currPlayer;
};

export { findSpotForCol, placeInTable };
