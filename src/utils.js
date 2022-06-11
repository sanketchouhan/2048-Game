import cloneDeep from "lodash.clonedeep";

export const checkGameWon = (board, value) => {
  let wonFlag = false;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === value) {
        wonFlag = true;
      }
    }
  }
  return wonFlag;
};

export const checkGameFinished = (board) => {
  // let isFinished = false;
  if (getEmptyTiles(board).length !== 0) return false;
  const _oldBoard = cloneDeep(board);
  let _board = cloneDeep(board);
  if (JSON.stringify(_oldBoard) !== JSON.stringify(slideLeft(_board).board))
    return false;
  _board = cloneDeep(board);
  if (JSON.stringify(_oldBoard) !== JSON.stringify(slideRight(_board).board))
    return false;
  _board = cloneDeep(board);
  if (JSON.stringify(_oldBoard) !== JSON.stringify(slideUp(_board).board))
    return false;
  _board = cloneDeep(board);
  if (JSON.stringify(_oldBoard) !== JSON.stringify(slideDown(_board).board))
    return false;

  return true;
};

export const addTile = (board) => {
  // let _board = board;
  const emptyTiles = getEmptyTiles(board);
  if (emptyTiles.length) {
    const idx = Math.floor(Math.random() * emptyTiles.length);
    board[emptyTiles[idx].r][emptyTiles[idx].c] = {
      value: Math.random() < 0.6 ? 2 : 4,
      newTile: true,
    };
  }
  return board;
};

const getEmptyTiles = (board) => {
  let arr = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c].value === 0) {
        arr.push({ r, c });
      }
    }
  }
  return arr;
};

const filterZero = (row) => {
  return row.filter((r) => r.value !== 0);
};

const slide = (row) => {
  const column = row.length;
  let score = 0;
  row = filterZero(row);

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i].value === row[i + 1].value) {
      row[i].value *= 2;
      row[i + 1].value = 0;
      score += row[i].value;
    }
    row[i].newTile = false;
  }
  if (row[row.length - 1]) row[row.length - 1].newTile = false;
  row = filterZero(row);
  while (row.length < column) {
    row.push({ value: 0, newTile: false });
  }
  return { row, score };
};

export const slideTiles = (board, direction) => {
  const _oldBoard = cloneDeep(board);
  let obj;
  if (direction === "left") {
    obj = slideLeft(board);
  } else if (direction === "right") {
    obj = slideRight(board);
  } else if (direction === "up") {
    obj = slideUp(board);
  } else if (direction === "down") {
    obj = slideDown(board);
  }

  if (JSON.stringify(_oldBoard) !== JSON.stringify(obj.board))
    obj.board = addTile(obj.board);
  return obj;
};

const slideLeft = (board) => {
  let score = 0;
  for (let r = 0; r < board.length; r++) {
    let row = board[r];
    let obj = slide(row);
    board[r] = obj.row;
    score += obj.score;
  }

  return { board, score };
};

const slideRight = (board) => {
  let score = 0;
  for (let r = 0; r < board.length; r++) {
    let row = board[r];
    row.reverse();
    let obj = slide(row);
    obj.row.reverse();
    board[r] = obj.row;
    score += obj.score;
  }

  return { board, score };
};

const slideUp = (board) => {
  let score = 0;
  for (let c = 0; c < board[0].length; c++) {
    let row = [];
    for (let r = 0; r < board.length; r++) {
      row.push(board[r][c]);
    }
    let obj = slide(row);
    for (let r = 0; r < board.length; r++) {
      board[r][c] = obj.row[r];
    }
    score += obj.score;
  }

  return { board, score };
};

const slideDown = (board) => {
  let score = 0;
  for (let c = 0; c < board[0].length; c++) {
    let row = [];
    for (let r = 0; r < board.length; r++) {
      row.push(board[r][c]);
    }
    row.reverse();
    let obj = slide(row);
    obj.row.reverse();
    for (let r = 0; r < board.length; r++) {
      board[r][c] = obj.row[r];
    }
    score += obj.score;
  }

  return { board, score };
};
