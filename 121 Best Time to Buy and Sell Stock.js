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