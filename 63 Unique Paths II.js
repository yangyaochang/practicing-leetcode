var uniquePathsWithObstacles = function(obstacleGrid) {
    let cache = {}

    const move = (row, col) => {
        let position  = row + '_' + col
        if (row >= obstacleGrid.length || col >= obstacleGrid[0].length) {return 0}
        if (obstacleGrid[row][col] === 1) {return 0}
        if (row === obstacleGrid.length - 1 && col === obstacleGrid[0].length - 1) {return 1}
        if (position in cache) {return cache[position]}

        return cache[position] = move(row + 1, col) + move(row, col + 1)
    }

    return move(0, 0)
};

const obstacleGrid = [[0,0,0],
                    [0,1,0],
                    [0,0,0]]

console.log(uniquePathsWithObstacles(obstacleGrid))

// Memoization

var uniquePathsWithObstacles = function(obstacleGrid) {
    const cache = {}

    const move = (r, c) => {
        const position = `${r}_${c}`

        if (r >= obstacleGrid.length || c >= obstacleGrid[0].length) {return 0}
        if (obstacleGrid[r][c] === 1) {return 0}
        if (r === obstacleGrid.length - 1 && c === obstacleGrid[0].length - 1) {return 1}
        if (position in cache) {return cache[position]}

        cache[position] = move(r + 1, c) + move(r, c + 1)
        return cache[position]
    }
    return move(0, 0)
}

// Tabulation

var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {return 0}
    
    const dp = []

    for (let i = 0; i < obstacleGrid.length; i++) {
        const row = new Array(obstacleGrid[0].length)
        row.fill(0)
        dp.push(row)
    }

    dp[0][0] = 1

    for (let i = 1; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] !== 1) {
            dp[i][0] = dp[i - 1][0]
        }
    }

    for (let j = 1; j < obstacleGrid[0].length; j++) {
        if (obstacleGrid[0][j] !== 1) {
            dp[0][j] = dp[0][j - 1]
        }
    }

    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] !== 1) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }

    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};
