/*

https://leetcode.com/problems/grid-illumination/

You are given a grid of size N x N, and each cell of this grid has a lamp that is initially turned off.

You are also given an array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.

Finally, you are given a query array queries, where queries[i] = [rowi, coli]. For the ith query, determine whether grid[rowi][coli] is illuminated or not. After answering the ith query, turn off the lamp at grid[rowi][coli] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowi][coli].

Return an array of integers ans, where ans[i] should be 1 if the lamp in the ith query was illuminated, or 0 if the lamp was not.
*/

var gridIllumination = function (N, lamps, queries) {
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    let newLamps = [];
    let isOn = false;
    for (let j = 0; j < lamps.length; j++) {
      let x = queries[i][0];
      let y = queries[i][1];
      let lampX = lamps[j][0];
      let lampY = lamps[j][1];
      if (Math.abs(lampX - x) > 1 || Math.abs(lampY - y) > 1) {
        newLamps.push(lamps[j]);
      }
      if (
        x === lampX ||
        y === lampY ||
        Math.abs(lampX - x) === Math.abs(lampY - y)
      ) {
        isOn = true;
      }
    }
    if (isOn === true) ans.push(1);
    else ans.push(0);
    lamps = newLamps;
  }
  return ans;
};
