var maxDistance = function(grid) {
    let maxDistance = -1

    const getDistance = (row, col) => {
        const visited = new Set()
        
        const dfs = (r, c) => {
            const position = `${r}_${c}`
            if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {return Infinity}
            if (visited.has(position)) {return Infinity}
            if (grid[r][c] === 1) {return Math.abs(row - r) + Math.abs(col - c)}

            visited.add(position)

            return Math.min(dfs(r + 1, c), dfs(r - 1, c), dfs(r, c + 1), dfs(r, c - 1))
        }

        return dfs(row, col)
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                if (maxDistance === -1) {maxDistance = getDistance(i, j)}
                maxDistance = Math.max(maxDistance, getDistance(i, j))
            }
        }
    }

    if (maxDistance === -1 || maxDistance === Infinity) {return -1}
    return maxDistance
};

const grid = [[1,0,1],[0,0,0],[1,0,1]]

console.log(maxDistance(grid))