var maximumMinimumPath = function(A) {
    const visited = new Set()
    let max = -Infinity
    
    const dfs = (row, col, min) => {
        const position = `${row}_${col}`
        if (row < 0 || col < 0 || row >= A.length ||col >= A[0].length) {return}
        if (visited.has(position)) {return}
        if (position === `${A.length - 1}_${A[0].length - 1}`) {
            min = Math.min(min, A[row][col])
            max = Math.max(max, min)
            return
        }

        visited.add(position)
        min = Math.min(min, A[row][col])

        dfs(row + 1, col, min)
        dfs(row - 1, col, min)
        dfs(row, col + 1, min)
        dfs(row, col - 1, min)
        visited.delete(position)
    }

    dfs(0, 0, A[0][0])
    return max
};

const A = [[5,4,5],[1,2,6],[7,4,6]]

console.log(maximumMinimumPath(A))