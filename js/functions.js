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

  // Cambiar aquí 1 y 0 por 🌿 o 👼 y 🪦
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
export const check  (board) => {
  let result = [];
  if(cell.status === 1 && cell.row === 1 && cell.column === 3) {
    
  }
}
