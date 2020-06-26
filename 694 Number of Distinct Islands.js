var numDistinctIslands = function(grid) {
    let count = 0
    let cache = new Set()
    let path

    const dfs = (row, col, sr, sc) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {return}
        if (grid[row][col] === 0) {return}

        path += `${row - sr}${col - sc}`
        grid[row][col] = 0

        dfs(row + 1, col, sr, sc)
        dfs(row - 1, col, sr, sc)
        dfs(row, col + 1, sr, sc)
        dfs(row, col - 1, sr, sc)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                path = ''
                dfs(i, j, i, j)
                if (!cache.has(path)) {
                    count++
                    cache.add(path)
                }
            }
        }
    }

    return count
};

const grid = [[1,1,0,0,0],
            [1,1,0,0,0],
            [0,0,0,1,1],
            [0,0,0,1,1]]

console.log(numDistinctIslands(grid))