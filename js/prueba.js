import { generateArray, showBoard } from "./functions.js";

const columns = 4;
const row = 2;
const prueba = generateArray(columns, row);

console.log(prueba);
showBoard(prueba, columns);
