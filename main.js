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
  const boardCells = document.querySelectorAll(".game--Box__cell");
  boardCells.forEach((cell, index) => {
    if (board[index].status === 0) {
      cell.textContent = "(x_x')";
      cell.style.background = "#73462c";
    }

    if (board[index].status === 1) {
      cell.textContent = "(˶ˆᗜˆ˵)";
      cell.style.background = "#52ad4c";
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

const playGame = () => {
  let newBoard = generateArray(10, 10);

  intervalID = setInterval(() => {
    showBoard(newBoard);

    const boardActualized = playTurn(newBoard);
    showBoard(boardActualized);

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
