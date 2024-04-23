/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let recursiveFlipper = function (grid, x, y) {
        if (grid[x][y] == "1") {
            grid[x][y] = "x"
        }
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                try {
                    if (grid[i][j] == "1") {
                        recursiveFlipper(grid, i, j)
                    }
                } catch (error) {
                    continue
                }
            }
        }
    }
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                count++
                recursiveFlipper(grid,i,j)
            }
        }
    }
    return count
};



let expGrid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

console.log(numIslands(expGrid));
console.log(expGrid);