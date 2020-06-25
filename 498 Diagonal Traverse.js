/*
從 row = 0 開始往左下方 traverse 再從最後一個 column 繼續往左下方 traverse。辨認哪些情況下需要 reverse sub array
*/

var findDiagonalOrder = function(matrix) {
    let list = []
    if (matrix.length === 0) {return list}

    for (let i = 0; i < matrix[0].length; i++) {
        if (i % 2 === 0) {
            list = list.concat(traverse(0, i, []).reverse())
        } else {
            list = list.concat(traverse(0, i, []))
        }
    }

    let x = 0
    if (matrix[0].length % 2 === 0) {
        x = 1
    }
    // 有幾個 column 會決定接下來是偶數 row 還是奇數 row 要 reverse()

    for (let i = 1; i < matrix.length; i++) {
        if (i % 2 === x) {
            list = list.concat(traverse(i, matrix[0].length - 1, []).reverse())
        } else {
            list = list.concat(traverse(i, matrix[0].length - 1, []))
        }
    }

    return list

    function traverse(row, col, subList) {
        if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
            return subList
        }
        
        subList.push(matrix[row][col])
        return traverse(row + 1, col - 1, subList)
    }
};

const matrix = [[ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ]]

console.log(findDiagonalOrder(matrix))