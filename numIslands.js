/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

var numIslands = function(grid) {
  let count = 0

  const markIsland = (x, y) => {
      grid[x][y] = "2"

      if (x - 1 >= 0) {
          if (grid[x - 1][y] === '1') {
              markIsland(x - 1, y)
          }
      }
      if (x + 1 <= grid.length - 1) {
          if (grid[x + 1][y] === '1') {
              markIsland(x + 1, y)
          }
      }
      if (y - 1 >= 0) {
          if (grid[x][y - 1] === '1') {
              markIsland(x, y - 1)
          }
      }
      if (y + 1 <= grid[0].length - 1) {
          if (grid[x][y + 1] === '1') {
              markIsland(x, y + 1)
          }
      }
  }

  for (a = 0; a < grid.length; a++) {
      for (b = 0; b < grid[a].length; b++) {
          if (grid[a][b] === '1') {
              count++
              markIsland(a, b)
          }
      }
  }

  return count
};