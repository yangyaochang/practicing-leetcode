var numWays = function(n, k) {
    let count = 0

    const paint = (arr) => {
        if (arr.length === n) {
            count++
            return
        }

        for (let i = 1; i <= k; i++) {
            if (arr.length >= 2 && arr[arr.length - 1] === arr[arr.length - 2] && arr[arr.length - 1] === i) {continue}
            arr.push(i)
            paint(arr)
            arr.pop()
        }
    }

    if (n === 0) {return 0}
    paint([])
    return count
}

/*
dp[i][0] 代表第 i 根柱子且與前面不同顏色，有幾種塗法
dp[i][1] 代表第 i 根柱子且與前面同顏色，有幾種塗法

dp[i][0] = (k - 1) * (dp[i - 1][0] + dp[i - 1][1]) 代表與前面不同顏色，前面已經用掉一種顏色，所以剩 (k - 1) 種
dp[i][1] = dp[i - 1][0] 與前面同顏色，只有一種選擇

Base Case:
dp[0][1] = 0
dp[0][0] = k
*/

var numWays = function(n, k) {
    const dp = []

    if (n === 0) {return 0}

    for (let i = 0; i < n; i++) {
        dp.push([0, 0])
    }

    dp[0][1] = 0
    dp[0][0] = k

    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = (k - 1) * (dp[i - 1][0] + dp[i - 1][1])
        dp[i][1] = dp[i - 1][0]
    }

    return dp[n - 1][0] + dp[n - 1][1]
};