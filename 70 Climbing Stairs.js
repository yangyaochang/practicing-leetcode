var climbStairs = function(n) {
    let cache = {}
    const climb = (level) => {
        if (level === 0) {return 1}
        if (level < 0) {return 0}
        if (cache[level]) {return cache[level]}

        let paths = climb(level - 1) + climb(level - 2)
        if (!cache[level]) {cache[level] = paths}
        return paths
    } 

    return climb(n)
}

/*
第二次做
Time Complexity: O(n)
Space Complexity: O(n)
*/

var climbStairs = function(n) {
    const cache = {}

    const climb = (stairs) => {
        if (stairs > n) {return 0}
        if (stairs === n) {return 1}
        if (stairs in cache) {return cache[stairs]}

        cache[stairs] = climb(stairs + 1) + climb(stairs + 2)

        return cache[stairs]
    }

    return climb(0)
};

/*
Dynamic Programming
Time Complexity: O(n)
Space Complexity: O(n)
*/

var climbStairs = function(n) {
    const dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

const n = 3
console.log(climbStairs(n))

/*
先推出窮舉方法再用 Memoization 優化
*/

var climbStairs = function(n) {
    const cache = {}

    const climb = (stair) => {
        if (stair === n) {return 1}
        if (stair > n) {return 0}
        if (stair in cache) {return cache[stair]}

        cache[stair] = climb(stair + 1) + climb(stair + 2)
        return cache[stair]
    }

    return climb(0)
};

/*
有了窮舉結構根據四步驟思考流程以 Tabulation 優化

1. 找到狀態
2. 定義 dp[i] 的意義
3. 列出狀態轉移方程式
4. 以狀態作為 dp[i] 的 index，為 base cases 賦值，以狀態轉移方程式求解
*/

var climbStairs = function(n) {
    const dp = new Array(n + 1)
    dp.fill(1)

    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

const n = 3

console.log(climbStairs(n))

/*
進一步壓縮 Space Complexity
*/

var climbStairs = function(n) {
    let dp_0 = 1
    let dp_1 = 1
    
    if (n === 0) {return dp_0}
    if (n === 1) {return dp_1}

    for (let i = 0; i < n - 1; i++) {
        dp_i = dp_0 + dp_1
        dp_0 = dp_1
        dp_1 = dp_i
    }
    return dp_i
};