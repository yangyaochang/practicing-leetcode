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