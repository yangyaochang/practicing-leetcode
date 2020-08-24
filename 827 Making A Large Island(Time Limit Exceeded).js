var largestIsland = function(grid) {
    const dfs = (row, col) => {
        const visited = new Set()

        const traverse = (r, c) => {
            const position = `${r}_${c}`
            if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {return 0}
            if (grid[r][c] === 0) {return 0}
            if (visited.has(position)) {return 0}

            visited.add(position)

            return traverse(r + 1, c) + traverse(r - 1, c) + traverse(r, c + 1) +  traverse(r, c - 1) + 1 
        }

        return traverse(row, col)
    }

    let maxArea = dfs(0, 0)
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {

                grid[i][j] = 1
                for (let m = 0; m < grid.length; m++) {
                    for (let n = 0; n < grid[0].length; n++) {
                        if (grid[m][n] === 1) {
                            maxArea = Math.max(maxArea, dfs(m, n))
                        }
                    }
                }
                grid[i][j] = 0
            }
        }
    }

    return maxArea
};

const grid = [[1, 0], [0, 1]]

console.log(largestIsland(grid))