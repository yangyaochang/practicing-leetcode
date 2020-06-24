/*
這題是一個 Dynamic Programming 的問題，當在 loop through matrix 的時候，每一個 item 都是一個 square 的最右下角，
所以往 matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1] 三個方向檢查是否可以發展成更大的 square，記錄下
最大 square 的值，代表從頭 loop through 到這裡為止最大的 square。Dynamic programming 只看已檢查的部分，
不關心還沒檢查的部分 (這我自己的解讀)，從已知得未知。
*/

var maximalSquare = function(matrix) {
    let maxArea = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                if (i > 0 && j > 0) {
                    matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]) + 1
                    maxArea = (maxArea < matrix[i][j]) ? matrix[i][j] : maxArea
                } else {
                    maxArea = (maxArea < matrix[i][j]) ? matrix[i][j] : maxArea
                }
            }   
        } 
    }

    return maxArea * maxArea
};

// const matrix = [[1, 0, 1, 0, 0],
//                 [1, 0, 1, 1, 1],
//                 [1, 1, 1, 1, 1],
//                 [1, 0, 0, 1, 0]]

const matrix = [[1]]

console.log(maximalSquare(matrix))