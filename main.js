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

const cells = document.querySelectorAll(".game--Box__cell");

export function showBoard(board, cells) {
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
  let aliveAround;
  result = board.map((originCell) => {
    aliveAround = board.filter(
      (cellFilter) =>
        cellFilter.status === 1 &&
        ((cellFilter.row === originCell.row - 1 &&
          cellFilter.column === originCell.column - 1) ||
          (cellFilter.row === originCell.row - 1 &&
            cellFilter.column === originCell.column) ||
          (cellFilter.row === originCell.row - 1 &&
            cellFilter.column === originCell.column + 1) ||
          (cellFilter.row === originCell.row + 1 &&
            cellFilter.column === originCell.column - 1) ||
          (cellFilter.row === originCell.row + 1 &&
            cellFilter.column === originCell.column) ||
          (cellFilter.row === originCell.row + 1 &&
            cellFilter.column === originCell.column + 1) ||
          (cellFilter.row === originCell.row &&
            cellFilter.column === originCell.column - 1) ||
          (cellFilter.row === originCell.row &&
            cellFilter.column === originCell.column + 1))
    ).length;
    let nextStatus;
    if (originCell.status === 1) {
      if (aliveAround === 2 || aliveAround === 3) {
        nextStatus = 1;
      } else {
        nextStatus = 0;
      }
    } else if (aliveAround === 3) {
      nextStatus = 1;
    } else {
      nextStatus = 0;
    }

    return {
      status: nextStatus,
      row: originCell.row,
      column: originCell.column,
    };
  });

  return result;
}

let intervalID;

const playGame = (intervalID) => {
  let newBoard = generateArray(5, 5);
  intervalID = setInterval(() => {
    showBoard(newBoard);
    console.log(" ");
    const boardActualized = playTurn(newBoard);
    showBoard(boardActualized);
    console.log(" ");

    newBoard = playTurn(boardActualized);
  }, 1000);
};

const startButton = document.querySelector(".start--button");
const stopButton = document.querySelector(".stop--button");

startButton.addEventListener("click", () => {
  playGame();
});
stopButton.addEventListener("click", () => {
  clearInterval(intervalID);
});
