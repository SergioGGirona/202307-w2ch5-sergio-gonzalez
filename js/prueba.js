import { generateArray, showBoard } from "./functions.js";

const columns = 5;
const row = 4;
const prueba = generateArray(columns, row);
console.log(prueba);

showBoard(prueba, columns);
