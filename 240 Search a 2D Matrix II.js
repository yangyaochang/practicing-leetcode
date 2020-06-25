/*
一個 row 與 col 都是 sorted 的 2d array 裡，從 top-left 與 bottom-right 是沒有辦法依照大小判斷往哪個方向移動 (移動代表有一部分的 matrix 可以不用考慮)
但如果是從 top-right 或 bottom-left 來看，可以根據 target 與 current value 的大小來判斷往哪個方向移動，也就是可以忽略一部分的 matrix，
概念與 Binary Search 類似。
*/

var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {return false}
    // Handle edge cases: when matrix = []
    
    let row = 0
    let col = matrix[0].length - 1

    while (row >=0 && col >= 0 && row < matrix.length && col < matrix[0].length) {
        if (target < matrix[row][col]) {col--}
        else if (target > matrix[row][col]) {row++}
        else {return true}
    }
    return false
};

const matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

const target = 5

console.log(searchMatrix(matrix, target))