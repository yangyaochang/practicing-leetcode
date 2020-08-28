var getRow = function(rowIndex) {
    const triangle = []
    
    for (let i = 0; i <= rowIndex; i++) {
        const row = new Array(i + 1)
        row.fill(0)
        row[0] = 1
        row[row.length - 1] = 1
        triangle.push(row)
    }
    
    for (let i = 0; i <= rowIndex; i++) {
        for (let j = 1; j < triangle[i].length - 1; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
        }
    }
    return triangle[rowIndex]
};