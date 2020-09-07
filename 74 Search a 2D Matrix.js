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

/*
if (condition 1) {...}
else if (condition 2) {...}

跟

if (condition 1) {...}
if (condition 2) {...}

邏輯上是不一樣的
*/

var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1
    let col = 0

    while (row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length) {
        if (matrix[row][col] === target) {return true}
        else if (matrix[row][col] > target) {row--}
        else if (matrix[row][col] < target) {col++}
    }
    return false
}

const matrix = [[1,   3,  5,  7],
                [10, 11, 16, 20],
                [23, 30, 34, 50]]
const target = 3

console.log(searchMatrix(matrix, target))