var tribonacci = function(n) {
    let list = [0, 1, 1]
    
    for (let i = 3; i <= n; i++) {
        list[i] = list[i - 1] + list[i - 2] + list[i - 3]
    }
    
    return list[n]
};

// Memoization

var tribonacci = function(n) {
    const cache = {}

    const value = (n) => {
        if (n === 0) {return 0}
        if (n === 1 || n === 2) {return 1}
        if (n in cache) {return cache[n]}

        cache[n] = value(n - 1) + value(n - 2) + value(n - 3)
        return cache[n]
    }

    return value(n)
}

// Tabulation

var tribonacci = function(n) {
    const dp = new Array(n + 1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1

    if (n === 0) {return 0}
    if (n < 3) {return 1} 

    for (let i = 3; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
    }

    return dp[n]
}

// 壓縮 Space Complexity

var tribonacci = function(n) {
    let dp_0 = 0
    let dp_1 = 1
    let dp_2 = 1
    let dp_i

    if (n === 0) {return 0}
    if (n < 3) {return 1} 

    for (let i = 3; i < n + 1; i++) {
        dp_i = dp_2 + dp_1 + dp_0
        dp_0 = dp_1
        dp_1 = dp_2
        dp_2 = dp_i
    }

    return dp_i
}

var tribonacci = function(n) {
    let dp_0 = 0
    let dp_1 = 1
    let dp_2 = 1
    let dp_i

    if (n === 0) {return 0}
    if (n < 3) {return 1}

    for (let i = 3; i < n + 1; i++) {
        dp_i = dp_0 + dp_1 + dp_2
        dp_0 = dp_1
        dp_1 = dp_2
        dp_2 = dp_i
    }

    return dp_i
}