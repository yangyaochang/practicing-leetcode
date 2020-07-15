var maxProfit = function(prices) {
    if (prices.length === 0) {return 0}
    
    let [dp_i10, dp_i11, dp_i20, dp_i21] = [0, - Infinity, 0, - Infinity]
    
    for (let i = 0; i < prices.length; i++) {
        let temp = dp_i10
        dp_i10 = Math.max(dp_i10, dp_i11 + prices[i])
        dp_i11 = Math.max(dp_i11, - prices[i])
        dp_i20 = Math.max(dp_i20, dp_i21 + prices[i])
        dp_i21 = Math.max(dp_i21, temp - prices[i])
    }
    
    return dp_i20
};