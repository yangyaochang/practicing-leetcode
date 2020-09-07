/*
先轉置 [row][col] 反轉，再 reverse 每一個 row 
*/

var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        // j = i，若從 j = 0 會被換兩次回復原狀
        for (let j = i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let left = 0
        let right = matrix[i].length - 1
        while (left < right) {
            [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]]
            left++
            right--
        }
    }

    return matrix
};

const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]]

console.log(rotate(matrix))

// 先轉置 (transpose) 再 reverse

var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse()
    }

    return matrix
}

const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

console.log(rotate(matrix))
