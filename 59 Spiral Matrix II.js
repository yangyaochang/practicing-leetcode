var generateMatrix = function(n) {
    let matrix = []
    let num = 1
    let [rowMin, rowMax, colMin, colMax] = [0, n - 1, 0, n - 1]

    for (let i = 0; i < n; i++) {
        let row = new Array(n)
        row.fill(0)
        matrix.push(row)
    }

    while (rowMin <= rowMax && colMin <= colMax) {
        for (let i = colMin; i <= colMax; i++) {
            matrix[rowMin][i] = num
            num++
        }
        rowMin++
        for (let i = rowMin; i <= rowMax; i++) {
            matrix[i][colMax] = num
            num++
        }
        colMax--
        if (rowMax >= rowMin) {
            for (let i = colMax; i >= colMin; i--) {
                matrix[rowMax][i] = num
                num++
            }
            rowMax--
        }
        if (colMax >= colMin) {
            for (let i = rowMax; i >= rowMin; i--) {
                matrix[i][colMin] = num
                num++
            }
            colMin++
        }
    }

    return matrix
};

const n = 3

console.log(generateMatrix(n))