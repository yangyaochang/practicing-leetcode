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

const matrix = [[0,0,0],
                [0,1,0],
                [1,1,1]]

console.log(updateMatrix(matrix))