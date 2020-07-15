var maxProfit = function(prices, fee) {
    if (prices.length === 0) {return 0}
    
    let n = prices.length
    let dp_i_0 = 0
    let dp_i_1 = - Infinity
    
    for (let i = 0; i < n; i++) {
        let temp = dp_i_0
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee)
    }
    
    return dp_i_0
};