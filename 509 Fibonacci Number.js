// Memoization

var fib = function(N) {
    const cache = {}

    const helper = (n) => {
        if (n === 0) {return 0}
        if (n === 1) {return 1}
        if (n in cache) {return cache[n]}

        cache[n] = helper(n - 1) + helper(n - 2)
        return cache[n]
    }

    return helper(N)
}

const n = 4

console.log(fib(n))

// Tabulation

var fib = function(N) {
    const dp = new Array(N + 1)
    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[N]
}

// 進一步壓縮 Space Complexity

var fib = function(N) {
    let dp_0 = 0
    let dp_1 = 1
    let dp_i = 0
    
    if (N === 0) {return dp_0}
    if (N === 1) {return dp_1}

    for (let i = 2; i <= N; i++) {
        dp_i = dp_0 + dp_1
        dp_0 = dp_1
        dp_1 = dp_i
    }

    return dp_i
};