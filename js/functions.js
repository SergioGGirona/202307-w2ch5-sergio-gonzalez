export function generateArray(columns, rows) {
  const arr = [];

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
    arr.push(cel);
  }

  return arr;
}

export function showBoard(board) {
  let arr = [];
  board.forEach((cel) => {
    arr.push(cel.status);
    if (cel.column % 5 === 0) {
      console.log(arr.join(" "));
      arr = [];
    }
  });
}
