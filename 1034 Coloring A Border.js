var colorBorder = function(grid, r0, c0, color) {
    const originalColor = grid[r0][c0]
    const visited = new Set()
    
    const dfs = (r, c) => {
        const position = `${r}_${c}`

        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {return false}
        if (visited.has(position)) {return true}
        if (grid[r][c] !== originalColor) {return false}
        

        visited.add(position)

        const [down, up, right, left] = [dfs(r + 1, c), dfs(r - 1, c), dfs(r, c + 1), dfs(r, c - 1)]

        if (!(down && up && right && left)) {
            grid[r][c] = color
        }
        return true
        // 注意為什麼這裡要 return true
    }

    dfs(r0, c0)
    return grid
};

const grid = [[1,1],[1,2]]
const r0 = 0
const c0 = 0
const color = 3

console.log(colorBorder(grid, r0, c0, color))