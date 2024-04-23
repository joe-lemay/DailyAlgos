/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let recursiveFlipper = function (grid, x, y) {
        if (grid[x][y] == "1") {
            grid[x][y] = "x"
        }
        let neighbors = [
            [x + 1, y],
            [x - 1, y],
            [x, y + 1],
            [x, y - 1]
        ]
        for (const neighbor of neighbors) {
            try {
                if (grid[neighbor[0]][neighbor[1]] == "1") {
                    recursiveFlipper(grid, neighbor[0], neighbor[1])
                }
            } catch (error) {
                continue
            }
        }

    }
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                recursiveFlipper(grid, i, j)
                count++
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