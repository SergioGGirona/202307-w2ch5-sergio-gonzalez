export function generateArray(columns, rows) {
  const cells = [];
  let row = 0;
  let column = 0;
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

  return cells;
}

export function showBoard(board) {
  let row = [];
  const maxColumn = board.filter((cel) => cel.row === 1).length;
  board.forEach((cel) => {
    row.push(cel.status);
    if (cel.column % maxColumn === 0) {
      console.log(row.join(" "));
      row = [];
    }
  });
}

export function playTurn(board) {
  let result = [];

  result = board.map(({ status, row, column }, index, totalCells) => {
    if (status === 1 && column === 1 && row === 1)
      return {
        status: checkCornerTopLeft(totalCells, true),
        row: 1,
        column: 1,
      };
    return checkCenterCells();
  });

  return result;
}

export function checkCornerTopLeft(board, isAlive) {
  if (isAlive) {
    const aliveAround =
      board.filter(
        (cellFilter) =>
          cellFilter.status === 1 &&
          (cellFilter.row === 1 || cellFilter.row === 2) &&
          (cellFilter.column === 1 || cellFilter.column === 2)
      ).length - 1;

    if (aliveAround > 1 && aliveAround < 4) return 1;
    if (aliveAround < 2 || aliveAround > 3) return 0;
  }

  if (!isAlive) {
    const aliveAround = board.filter(
      (cellFilter) =>
        cellFilter.status === 1 &&
        (cellFilter.row === 1 || cellFilter.row === 2) &&
        (cellFilter.column === 1 || cellFilter.column === 2)
    ).length;

    if (aliveAround === 3) return 1;
    return 0;
  }
}

export function checkCornerTopRight(board, isAlive) {
  const maxColumn = board.filter((cel) => cel.row === 1).length;
  if (isAlive) {
    const aliveAround =
      board.filter(
        (cellFilter) =>
          cellFilter.status === 1 &&
          (cellFilter.row === 1 || cellFilter.row === 2) &&
          (cellFilter.column === maxColumn || cellFilter.column === maxColumn)
      ).length - 1;

    if (aliveAround > 1 && aliveAround < 4) return 1;
    if (aliveAround < 2 || aliveAround > 3) return 0;
  }

  if (!isAlive) {
    const aliveAround = board.filter(
      (cellFilter) =>
        cellFilter.status === 1 &&
        (cellFilter.row === 1 || cellFilter.row === 2) &&
        (cellFilter.column === maxColumn || cellFilter.column === maxColumn)
    ).length;

    if (aliveAround === 3) return 1;
    return 0;
  }
}

export function checkCenterCells() {
  return 1;
}

const arrayTest = [
  { status: 0, row: 1, column: 1 },
  { status: 1, row: 1, column: 2 },
  { status: 0, row: 1, column: 3 },
  { status: 1, row: 1, column: 4 },
  { status: 1, row: 2, column: 1 },
  { status: 0, row: 2, column: 2 },
  { status: 1, row: 2, column: 3 },
  { status: 0, row: 2, column: 4 },
];
console.log(checkCornerBottomRight(arrayTest));
