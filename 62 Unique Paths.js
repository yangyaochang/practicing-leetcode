/*
key 用分隔線比較好
*/

var uniquePaths = function(m, n) {
    let cache = {}

    const move = (row, col) => {
        if (row >= n || col >= m) {return 0}
        if (row === n - 1 && col === m - 1) {return 1}

        let position = row + '_' + col
        if (position in cache) {return cache[position]}
        
        return cache[position] = move(row, col + 1) + move(row + 1, col)
    }

    return move(0, 0)
};

const m = 23
const n = 12

console.log(uniquePaths(m, n))

// Memoization

var uniquePaths = function(m, n) {
    const cache = {}

    const move = (r, c) => {
        const position = `${r}_${c}`

        if (r >= n || c >= m) {return 0}
        if (r === n - 1 && c === m - 1) {return 1}
        if (position in cache) {return cache[position]}

        cache[position] = move(r + 1, c) + move(r, c + 1)
        return cache[position]
    }

    return move(0, 0)
}

const m = 3
const n = 2

console.log(uniquePaths(m, n))

// Tabulation

var uniquePaths = function(m, n) {
    const dp = []

    for (let i = 0; i < n; i++) {
        const row = new Array(m)
        row.fill(0)
        dp.push(row)
    }

    dp[0][0] = 1
    // Base Case 想不到可以回到 dp[i][j] 的定義，從 [0][0] 走到 [0][0] 有幾種方法 - 有一種

    for (let j = 1; j < m; j++) {
        dp[0][j] = dp[0][j - 1]
    }

    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0]
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[n - 1][m - 1]
}

// 直接把 2D array 看成一個 dp table
// 記得狀態在窮舉裡是一個步驟 在 tabulation 裡是一個 subcase

var uniquePaths = function(m, n) {
    // 表格本身就是一個 dp table
    const dp = []

    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(1))
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
}
