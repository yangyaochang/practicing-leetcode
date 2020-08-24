var numIslands = function(grid) {
    let count = 0
    const dfs = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return
        }
        if (grid[row][col] === '0') {return}

        grid[row][col] = '0'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j)
                count++
            }
        }
    }

    return count
};

const grid = [["1","1","1","1","0"],
                ["1","1","0","1","0"],
                ["1","1","0","0","0"],
                ["0","0","0","0","0"]]

console.log(numIslands(grid))

var numIslands = function(grid) {
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {return}
        if (grid[row][col] === '0') {return}

        grid[row][col] = '0'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j)
                count++
            }
        }
    }

    return count
};