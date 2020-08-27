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