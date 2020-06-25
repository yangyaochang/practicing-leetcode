var minPathSum = function(grid) {
    let minSum = Infinity
    let rowMax = grid.length - 1
    let colMax = grid[0].length - 1

    const dfs = (row, col, curSum) => {
        if (row < 0 || col < 0 || row > rowMax || col > colMax) {return}
        if (row === rowMax && col === colMax) {
            curSum += grid[row][col]
            minSum = (curSum < minSum) ? curSum : minSum
            return 
        }

        curSum += grid[row][col]
        dfs(row + 1, col, curSum)
        dfs(row, col + 1, curSum)
    }

    dfs(0, 0, 0)
    return minSum
};

// Dybamic Programming
// 每一步都是左邊與上面較小的值與自己的和

var minPathSum = function(grid) {
    let rowMax = grid.length - 1
    let colMax = grid[0].length - 1
    
    for (let i = 0; i <= rowMax; i++) {
        for (let j = 0; j <= colMax; j++) {
            if (i === 0 && j > 0) {grid[i][j] += grid[i][j - 1]}
            else if (j === 0 && i > 0) {grid[i][j] += grid[i - 1][j]}
            else if (i > 0 && j > 0){
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]) 
            } 
        }
    }

    return grid[rowMax][colMax]
};

const grid = [[1,3,1],
            [1,5,1],
            [4,2,1]]

console.log(minPathSum(grid))