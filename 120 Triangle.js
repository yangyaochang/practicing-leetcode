/*
不是所有 dp 都是先 Top-down approach 推出窮舉再以 Memoization 優化，再轉成 Tabulation 
這題可以直接以 Bottom-up Approach 分析
*/

var minimumTotal = function(triangle) {
    const dp = []

    for (let i = 0; i < triangle.length; i++) {
        const row = new Array(i + 1)
        dp.push(row)
    }

    for (let i = triangle.length - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i === triangle.length - 1) {
                dp[i][j] = triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
            }
        }
    }

    return dp[0][0]
}

var minimumTotal = function(triangle) {
    let min = Infinity

    const dfs = (row, col, sum) => {
        if (row === triangle.length - 1) {
            sum += trangle[row][col]
            min = Math.min(min, sum)
            return 
        }

        sum += trangle[row][col]

        dfs(row + 1, col, sum)
        dfs(row + 1, col + 1, sum)
    }

    dfs(0, 0, 0)
    return min
};

var minimumTotal = function(triangle) {
    let num = triangle.length
    let list = []

    for (let i = 0; i < num; i++) {
        let row = new Array(i + 1)
        row.fill(0)

        list.push(row)
    }

    list[0][0] = triangle[0][0]

    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (j === 0) {list[i][j] = list[i - 1][j] + triangle[i][j]}
            else if (i === j) {list[i][j] = list[i - 1][j - 1] + triangle[i][j]}
            else {
                list[i][j] = Math.min(list[i - 1][j - 1], list[i - 1][j]) + triangle[i][j]
            }
        }
    }

    return Math.min(...list[num - 1])
};

const triangle = [[2],
                [3,4],
                [6,5,7],
                [4,1,8,3]]

console.log(minimumTotal(triangle))