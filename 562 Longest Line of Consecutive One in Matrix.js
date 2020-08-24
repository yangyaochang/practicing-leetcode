var longestLine = function(M) {
    const horizontal = (row, col) => {
        if (col >= M[0].length) {return 0}
        if (M[row][col] === 0) {return 0}

        return horizontal(row, col + 1) + 1
    }
    const vertical = (row, col) => {
        if (row >= M.length) {return 0}
        if (M[row][col] === 0) {return 0}

        return vertical(row + 1, col) + 1
    }
    const diagonal = (row, col) => {
        if (col >= M[0].length || row >= M.length) {return 0}
        if (M[row][col] === 0) {return 0}

        return diagonal(row + 1, col + 1) + 1
    }
    const antidiagonal = (row, col) => {
        if (col < 0 || row >= M.length) {return 0}
        if (M[row][col] === 0) {return 0}

        return antidiagonal(row + 1, col - 1) + 1
    }

    let maxLength = 0

    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1) {
                maxLength = Math.max(maxLength, horizontal(i, j), vertical(i, j), diagonal(i, j), antidiagonal(i, j))
            }
        }
    }

    return maxLength
};

const M = [[0,1,1,0],
            [0,1,1,0],
            [0,0,0,1]]

console.log(longestLine(M))