var longestIncreasingPath = function(matrix) {
    const visited = new Set()
    const cache = {}
    
    const dfs = (r, c, preNum) => {
        const position = `${r}_${c}`
        if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length) {return 0}
        if (visited.has(position)) {return 0}
        if (preNum !== undefined && matrix[r][c] <= preNum) {return 0}
        if (position in cache) {return cache[position]}

        visited.add(position)
        cache[position] = 1 + Math.max(dfs(r + 1, c, matrix[r][c]), dfs(r - 1, c, matrix[r][c]), dfs(r, c + 1, matrix[r][c]), dfs(r, c - 1, matrix[r][c]))
        visited.delete(position)
        return cache[position]
    }

    let maxLength = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            maxLength = Math.max(maxLength, dfs(i, j, undefined))
        }
    }
    return maxLength
};