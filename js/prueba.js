import { playTurn, showBoard } from "./functions.js";

const origin = [
  { status: 0, row: 1, column: 1 },
  { status: 1, row: 1, column: 2 },
  { status: 1, row: 1, column: 3 },
  { status: 0, row: 1, column: 4 },
  { status: 1, row: 2, column: 1 },
  { status: 1, row: 2, column: 2 },
  { status: 1, row: 2, column: 3 },
  { status: 1, row: 2, column: 4 },
  { status: 1, row: 3, column: 1 },
  { status: 0, row: 3, column: 2 },
  { status: 0, row: 3, column: 3 },
  { status: 1, row: 3, column: 4 },
  { status: 0, row: 4, column: 1 },
  { status: 1, row: 4, column: 2 },
  { status: 0, row: 4, column: 3 },
  { status: 1, row: 4, column: 4 },
];
showBoard(origin);
console.log("");
const nextPlay = playTurn(origin);

showBoard(nextPlay);

// Console.log('');
// nextPlay = playTurn(origin);
// showBoard(nextPlay);
