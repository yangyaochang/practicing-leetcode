var luckyNumbers  = function(matrix) {
    const list = []

    for (let i = 0; i < matrix.length; i++) {
        let min = Infinity
        let index = []
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j]
                index = [i, j]
            }        
        }

        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][index[1]] > matrix[index[0]][index[1]]) {break}
            if (k === matrix.length - 1) {
                list.push(matrix[index[0]][index[1]])
            }
        }
    }
    return list
};

const matrix = [[3,7,8],[9,11,13],[15,16,17]]

console.log(luckyNumbers(matrix))