var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {return false}
    // Handle edge cases when matrix = []
    let row = matrix.length - 1
    let col = 0

    while (row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length) {
        if (matrix[row][col] > target) {row--}
        else if (matrix[row][col] < target) {col++}
        else if (matrix[row][col] === target) {return true}
    }

    return false
};

const matrix = [[1,   3,  5,  7],
                [10, 11, 16, 20],
                [23, 30, 34, 50]]

const target = 3

console.log(searchMatrix(matrix, target))