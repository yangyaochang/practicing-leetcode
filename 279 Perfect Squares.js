/*
Memoization

從 0 開始，每次可以選擇加上一個小於 n 的完全平方數，建立窮舉邏輯
我覺得跟走樓題，coin change 是一樣的道理，只是你每一次的選擇是什麼不同，一次走幾階、硬幣幣值有哪些、小於 n 的平方數有哪些

重點在於如何嘗試所有小於 n 的完全平方數
for loop 的條件是可以變換運用的
*/

var numSquares = function(n) {
    const cache = {}

    const add = (sum) => {
        if (sum === n) {return 1}
        if (sum > n) {return Infinity}
        if (sum in cache) {return cache[sum]}

        const returnVal = []
        for (let i = 1; i * i <= n; i++) {
            returnVal.push(add(sum + Math.pow(i, 2))) 
        }
        
        cache[sum] = Math.min(...returnVal) + 1
        return cache[sum]
    }

    return add(0) - 1
};

const n = 12

console.log(numSquares(n))

// Tabulation 

var numSquares = function(n) {
    const dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1)
        }
    }

    return dp[n]
}

// 第二次做

var numSquares = function(n) {
    const cache = {}
    
    const add = (num) => {
        if (num === 0) {return 0}
        if (num in cache) {return cache[num]}

        const returnVal = []
        // 用 num - i * i >= 0 把會小於 0 的狀況排除
        for (let i = 1; num - i * i >= 0; i++) {
            returnVal.push(add(num - i * i))
        }

        cache[num] = Math.min(...returnVal) + 1
        return cache[num]
    }

    return add(n)
}

var numSquares = function(n) {
    const dp = new Array(n + 1)

    // 最差狀況都由 1 組成
    for (let i = 2; i <= n; i++) {
        dp[i] = i
    }

    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        for (let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }

    return dp[n]
}