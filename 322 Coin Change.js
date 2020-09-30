/*
Memoization
*/

var coinChange = function(coins, amount) {
    let cache = {}
    
    const add = (curSum) => {
        if (curSum > amount) {return Infinity}
        if (curSum === amount) {return 1}
        if (curSum in cache) {return cache[curSum]}

        let returnVal = []
        
        for (let i = 0; i < coins.length; i++) {
            returnVal.push(add(curSum + coins[i])) 
        }

        cache[curSum] = Math.min(...returnVal) + 1
        return cache[curSum]
    }

    return (add(0) === Infinity) ? -1 : add(0) - 1
};
const coins = [1, 2, 5]
const amount = 11

console.log(coinChange(coins, amount))

/*
Tabulation
*/

var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1)
    dp.fill(Infinity)
    dp[0] = 0
    
    for (let i = 1; i <= amount; i++) {
        const values = []
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] < 0) {continue}
            values.push(dp[i - coins[j]])
        }
    
        dp[i] = Math.min(...values) + 1
    }

    return (dp[dp.length - 1] === Infinity) ? -1 : dp.pop()
};

/*
Brute force 會超時
*/

var coinChange = function(coins, amount) {
    let minNums = Infinity

    const dfs = (start, sum, num) => {
        if (sum > amount) {return}
        if (sum === amount) {
            minNums = Math.min(minNums, num)
            return
        }

        for (let i = start; i < coins.length; i++) {
            dfs(i, sum + coins[i], num + 1)
        }
    }
    
    dfs(0, 0, 0)

    return (minNums === Infinity) ? -1 : minNums
}

const coins = [1, 2, 5]
const amount = 11

console.log(coinChange(coins, amount))

// Memoization

var coinChange = function(coins, amount) {
    const cache = {}
    
    const dfs = (sum) => {
        if (sum > amount) {return Infinity}
        if (sum === amount) {return 1}
        if (sum in cache) {return cache[sum]}

        const nums = []
        for (let i = 0; i < coins.length; i++) {
            nums.push(dfs(sum + coins[i]))
        }
        cache[sum] = Math.min(...nums) + 1
        return cache[sum]
    }

    let minNum = dfs(0)
    return (minNum === Infinity) ? -1 : minNum - 1
}

//Tabulation

var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1)
    dp.fill(Infinity)

    dp[0] = 0

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }

    return (dp[amount] === Infinity) ? -1 : dp[amount]
}

var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)

    dp[0] = 0

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }

    return (dp[amount] === Infinity) ? -1 : dp[amount]
}
