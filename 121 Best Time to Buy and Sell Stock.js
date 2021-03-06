var maxProfit = function(prices) {
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        let max = prices[i + 1] - prices[i]
        for (let j = i + 1; j < prices.length; j++) {
            max = (prices[j + 1] - prices[i] > max) ? prices[j + 1] - prices[i] : max
        }
        maxProfit = (max > maxProfit) ? max : maxProfit
    }

    return (maxProfit === 0) ? 0 : maxProfit
};


//DP 解法

var maxProfit = function(prices) {
    let dp = []
    if (prices.length === 0) {return 0}
    
    for (let i = 0; i < prices.length; i++) {
        dp.push([0, 0])
    }
    
    dp[0][0] = 0
    dp[0][1] = - prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    
    return dp[prices.length - 1][0]
};

// 第二次 DP 解法

var maxProfit = function(prices) {
    const dp = []

    for (let i = 0; i < prices.length; i++) {
        dp.push([0, 0])
    }

    dp[0][0] = 0
    dp[0][1] = - prices[0]

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }
    return dp[prices.length - 1][0]
}

// 忘了 dp[i - 1][k - 1][0] 在 k = 1 時會是 0

var maxProfit = function(prices) {
    if (prices.length <= 1) {return 0}
    
    const dp = []

    for (let i = 0; i < prices.length; i++) {
        dp.push([0, 0])
    }

    dp[0][0] = 0
    dp[0][1] = - prices[0]

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
    }

    return dp[prices.length - 1][0]
}

const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))

// 第四次做

var maxProfit = function(prices) {
    if (prices.length === 0) {return 0}
    const dp = []

    for (let i = 0; i < prices.length; i++) {
        dp.push([0, 0])
    }

    dp[0][0] = 0
    dp[0][1] = -prices[0]

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }

    return dp[prices.length - 1][0]
}

// 第五次做

var maxProfit = function(prices) {
    let dp_00 = 0
    let dp_01 = - prices[0]
    let dp_i0 = 0
    let dp_i1 = 0

    for (let i = 1; i < prices.length; i++) {
        dp_i0 = Math.max(dp_00, dp_01 + prices[i])
        dp_i1 = Math.max(dp_01, - prices[i])
        dp_00 = dp_i0
        dp_01 = dp_i1
    }
    return dp_i0
}
