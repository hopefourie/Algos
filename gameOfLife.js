/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
*/

//time O(mn)
//space O(mn)

var gameOfLife = function (board) {
  let nextGen = [];
  for (let i = 0; i < board.length; i++) {
    //O(n)
    nextGen.push(board[i].slice(0)); //O(m)
  }
  for (let i = 0; i < board.length; i++) {
    //O(n)
    for (let j = 0; j < board[0].length; j++) {
      //O(m)
      let liveNeighbors = getLiveNeighbors(nextGen, i, j); //O(1)
      if (board[i][j] === 1) {
        if (liveNeighbors < 2) {
          board[i][j] = 0;
        } else if (liveNeighbors < 4) {
          board[i][j] = 1;
        } else {
          board[i][j] = 0;
        }
      } else {
        if (liveNeighbors === 3) {
          board[i][j] = 1;
        } else {
          board[i][j] = 0;
        }
      }
    }
  }
  return board;
};

//time O(mn)
//Space O(1)
function getLiveNeighbors(board, i, j) {
  let count = 0;
  if (board[i][j + 1] == 1) {
    count++;
  }
  if (board[i][j - 1] == 1) {
    count++;
  }
  if (board[i + 1] && board[i + 1][j] == 1) {
    count++;
  }
  if (board[i + 1] && board[i + 1][j - 1] == 1) {
    count++;
  }
  if (board[i + 1] && board[i + 1][j + 1] == 1) {
    count++;
  }
  if (board[i - 1] && board[i - 1][j] == 1) {
    count++;
  }
  if (board[i - 1] && board[i - 1][j - 1] == 1) {
    count++;
  }
  if (board[i - 1] && board[i - 1][j + 1] == 1) {
    count++;
  }
  return count;
}

var gameOfLifeConstantSpace = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let liveNeighbors = getLiveNeighborsConstantSpace(board, i, j);
      if (board[i][j] === 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = -1;
        }
      } else if (liveNeighbors === 3) {
        board[i][j] = 2;
      }
    }
  }
  for (let k = 0; k < board.length; k++) {
    for (let l = 0; l < board[0].length; l++) {
      if (board[k][l] === 2) {
        board[k][l] = 1;
      } else if (board[k][l] === -1) {
        board[k][l] = 0;
      }
    }
  }
  return board;
};
function getLiveNeighborsConstantSpace(board, i, j) {
  let count = 0;
  if (Math.abs(board[i][j + 1]) == 1) {
    count++;
  }
  if (Math.abs(board[i][j - 1]) == 1) {
    count++;
  }
  if (board[i + 1] && Math.abs(board[i + 1][j]) == 1) {
    count++;
  }
  if (board[i + 1] && Math.abs(board[i + 1][j - 1]) == 1) {
    count++;
  }
  if (board[i + 1] && Math.abs(board[i + 1][j + 1]) == 1) {
    count++;
  }
  if (board[i - 1] && Math.abs(board[i - 1][j]) == 1) {
    count++;
  }
  if (board[i - 1] && Math.abs(board[i - 1][j - 1]) == 1) {
    count++;
  }
  if (board[i - 1] && Math.abs(board[i - 1][j + 1]) == 1) {
    count++;
  }
  return count;
}
