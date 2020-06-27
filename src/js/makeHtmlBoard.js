import { HEIGHT, WIDTH, currPlayer, board } from "./makeBoard.js";

function makeHtmlBoard() {
  // - get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.querySelector("#board");
  // - create table row that will be a place where the user clicks to choose where to drop piece
  const top = document.createElement("tr");
  // - gives that row an ID of column-top
  top.setAttribute("id", "column-top");
  // - add click listener and runs the handleClick function when that row is clicked
  top.addEventListener("click", handleClick);
  // - loop to iterate over the first row in the table
  for (let x = 0; x < WIDTH; x++) {
    // - create a headCell (data cell)
    const headCell = document.createElement("td");
    // - give that data cell an ID of unique number
    headCell.setAttribute("id", x);
    // - add the data cell to the top row
    top.append(headCell);
  }
  // - add that top row to the html Board
  htmlBoard.append(top);

  // - iterate over the set board width and height to make the board where pieces fall into
  for (let y = 0; y < HEIGHT; y++) {
    // - create a row
    const row = document.createElement("tr");
    // - iterate over each row to add a data cell for the number of width chosen
    for (let x = 0; x < WIDTH; x++) {
      // - add data cell where the piece will be in
      const cell = document.createElement("td");
      // - add an ID of a unique number for each data cell
      cell.setAttribute("id", `${y}-${x}`);
      // - append those cells to each row
      row.append(cell);
    }
    // - append each row to the htmlBoard
    htmlBoard.append(row);
  }
}
