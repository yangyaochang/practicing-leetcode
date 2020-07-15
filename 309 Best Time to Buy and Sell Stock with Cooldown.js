/*
見 https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/tuan-mie-gu-piao-wen-ti
*/

var maxProfit = function(prices) {
    if (prices.length === 0) {return 0}
    
    let n = prices.length
    let dp_i_0 = 0
    let dp_i_1 = - Infinity
    let dp_pre_0 = 0
    
    for (let i = 0; i < n; i++) {
        let temp = dp_i_0
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i])
        dp_pre_0 = temp
    }
    
    return dp_i_0
};