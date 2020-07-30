var updateMatrix = function(matrix) {
    let queue = []
    let visited = new Set()
    let rowMax = matrix.length - 1
    let colMax = matrix[0].length - 1

    for (let i = 0; i <= rowMax; i++) {
        for (let j = 0; j <= colMax; j++) {
            if (matrix[i][j] === 1) {
                bfs(i, j, 1)
            }
        }
    }

    return matrix

    function bfs(row, col, level) {
        queue.push([row, col, level])
        visited.add(`${row}${col}`)
        let origin = [row, col]
        let found = false

        while (queue.length > 0) {
            let [row, col, level] = queue.shift()

            if (row + 1 <= rowMax && !visited.has(`${row + 1}${col}`)) {
                if (matrix[row + 1][col] === 0) {
                    matrix[origin[0]][origin[1]] = level
                    found = true
                } else {
                    queue.push([row + 1, col, level + 1])
                }
            }
            if (row - 1 >= 0 && !visited.has(`${row - 1}${col}`)) {
                if (matrix[row - 1][col] === 0) {
                    matrix[origin[0]][origin[1]] = level
                    found = true
                } else {
                    queue.push([row - 1, col, level + 1])
                }
            }
            if (col + 1 <= colMax && !visited.has(`${row}${col + 1}`)) {
                if (matrix[row][col + 1] === 0) {
                    matrix[origin[0]][origin[1]] = level
                    found = true
                } else {
                    queue.push([row, col + 1, level + 1])
                }
            }
            if (col - 1 >= 0 && !visited.has(`${row}${col - 1}`)) {
                if (matrix[row][col - 1] === 0) {
                    matrix[origin[0]][origin[1]] = level
                    found = true
                } else {
                    queue.push([row, col - 1, level + 1])
                }
            }
            if (found) {
                break
            }
        }
        queue.length = 0
        visited.clear()
    }
};

// 第二次做

var updateMatrix = function(matrix) {
    const bfs = (row, col) => {
        const queue = []
        const seen = new Set()

        queue.push([row, col, 0])
        seen.add(`${row}_${col}`)

        while (queue.length > 0) {
            const [r, c, level] = queue.shift()

            if (matrix[r][c] === 0) {
                matrix[row][col] = level
                return
            }

            if (!seen.has(`${r + 1}_${c}`) && r + 1 < matrix.length) {
                queue.push([r + 1, c, level + 1])
                seen.add(`${r + 1}_${c}`)
            }
            if (!seen.has(`${r - 1}_${c}`) && r - 1 >= 0) {
                queue.push([r - 1, c, level + 1])
                seen.add(`${r - 1}_${c}`)
            }
            if (!seen.has(`${r}_${c + 1}`) && c + 1 < matrix[0].length) {
                queue.push([r, c + 1, level + 1])
                seen.add(`${r}_${c + 1}`)
            }
            if (!seen.has(`${r}_${c - 1}`) && c - 1 >= 0) {
                queue.push([r, c - 1, level + 1])
                seen.add(`${r}_${c - 1}`)
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                bfs(i, j)
            }
        }
    }

    return matrix
};


const matrix = [[0,0,0],
                [0,1,0],
                [1,1,1]]

console.log(updateMatrix(matrix))