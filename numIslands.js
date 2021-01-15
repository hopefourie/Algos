/*
https://leetcode.com/problems/number-of-islands/

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var checkIsland = function (grid, i, j) {
  if (
    i < grid.length &&
    j < grid[0].length &&
    i >= 0 &&
    j >= 0 &&
    grid[i][j] === '1'
  ) {
    grid[i][j] = '0';
    checkIsland(grid, i + 1, j);
    checkIsland(grid, i - 1, j);
    checkIsland(grid, i, j + 1);
    checkIsland(grid, i, j - 1);
  }
};

var numIslands = function (grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        checkIsland(grid, i, j);
        islands++;
      }
    }
  }
  return islands;
};
