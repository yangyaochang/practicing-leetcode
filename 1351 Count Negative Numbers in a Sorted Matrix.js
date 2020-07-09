var countNegatives = function(grid) {
    let numInRow = grid[0].length
    let row = grid.length - 1
    let rowMax = grid.length - 1
    let colMax = grid[0].length - 1
    let col = 0
    let numOfNegative = 0

    while (row >= 0 && row <= rowMax && col >= 0 && col <= colMax) {
        if (grid[row][col] >= 0) {
            numInRow--
            col++
        } else {
            numOfNegative += numInRow
            row--
        }
    }
    return numOfNegative
};

const grid = [[4,3,2,-1],
            [3,2,1,-1],
            [1,1,-1,-2],
            [-1,-1,-2,-3]]

console.log(countNegatives(grid))