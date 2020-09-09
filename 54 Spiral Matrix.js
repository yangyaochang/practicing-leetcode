var spiralOrder = function(matrix) {
    if (matrix.length === 0) {return []}
    const list = []
    let rowMin = 0
    let colMin = 0
    let rowMax = matrix.length - 1
    let colMax = matrix[0].length - 1

    while (rowMin <= rowMax && colMin <= colMax) {
        for (let i = colMin; i <= colMax; i++) {
            list.push(matrix[rowMin][i])
        }
        rowMin++
        for (let i = rowMin; i <= rowMax; i++) {
            list.push(matrix[i][colMax])
        }
        colMax--
        if (rowMax >= rowMin) {
            for (let i = colMax; i >= colMin; i--) {
                list.push(matrix[rowMax][i])
            }
            rowMax--
        }
        if (colMax >= colMin) {
            for (let i = rowMax; i >= rowMin; i--) {
                list.push(matrix[i][colMin])
            }
            colMin++
        }
    }
    return list
}

const matrix = [[ 1, 2, 3 ],
                [ 4, 5, 6 ],
                [ 7, 8, 9 ]]

console.log(spiralOrder(matrix))