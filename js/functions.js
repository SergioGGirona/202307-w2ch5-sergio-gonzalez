export function generateArray(columns, rows) {
  const cells = [];
  let row = 0;
  let column = -1;
  for (let i = 0; i < columns * rows; i++) {
    if (i % columns === 0) {
      row++;
      column = 0;
    }

    column++;

    const cel = {
      status: Math.floor(Math.random() * 2),
      row,
      column,
    };
    cells.push(cel);
  }
// cambiar aquí 1 y 0 por 🌿 o 👼 y 🪦
  return cells;
}

export function showBoard(board, columns) {
  let row = [];
  board.forEach((cel) => {
    row.push(cel.status);
    if (cel.column % columns === 0) {
      console.log(row.join(" "));
      row = [];
    }
  });
}

export function checkNeighbours(cel, board, columns, rows) {
  const neighbours = [];
  const { row, column } = cel;

  if (row === 1 && column === 1) {
    //check row 1 & column 2, if there are more 1 than 0
  }
