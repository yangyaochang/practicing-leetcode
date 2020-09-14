/*
最原始的想法會想用 DFS 走訪每一個可能路徑 while keeping track of the current sum
Update the minSum if the current sum is smaller when reaching the destination
這樣一來不會產生 overlapping subproblems

改以 Return the value when reaching the destination
On each position, keep track of the minimum sum and return it
如此一來就可以以 Dynamic Programming 優化

以下先由窮舉推導到 Memoization
*/

var minPathSum = function(grid) {
    const cache = {}

    const move = (r, c) => {
        const position = `${r}_${c}`

        if (r >= grid.length || c >= grid[0].length) {return Infinity}
        if (r === grid.length - 1 && c === grid[0].length - 1) {return grid[r][c]}
        if (position in cache) {return cache[position]}

        cache[position] = Math.min(move(r + 1, c), move(r, c + 1)) + grid[r][c]
        return cache[position]
    }

    return move(0, 0)
};

// Tabulation 

var minPathSum = function(grid) {
    const dp = []

    for (let i = 0; i < grid.length; i++) {
        const row = new Array(grid[0].length)
        dp.push(row)
    }

    dp[grid.length - 1][grid[0].length - 1] = grid[grid.length - 1][grid[0].length - 1]
    // dp[i][j] 的意義是從終點走回 [i][j] 的最小 sum

    for (let i = grid.length - 2; i >= 0; i--) {
        dp[i][grid[0].length - 1] = dp[i + 1][grid[0].length - 1] + grid[i][grid[0].length - 1]
    }

    for (let j = grid[0].length - 2; j >= 0; j--) {
        dp[grid.length - 1][j] = dp[grid.length - 1][j + 1] + grid[grid.length - 1][j]
    }

    for (let i = grid.length - 2; i >= 0; i--) {
        for (let j = grid[0].length - 2; j >= 0; j--) {
            dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1])
        }
    }

    return dp[0][0]
}

// 最原始的想法

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

// Dynamic Programming
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