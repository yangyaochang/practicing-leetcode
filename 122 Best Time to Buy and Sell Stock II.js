/*
這題可以買賣很多次，The key point is we need to consider every peak immediately following a valley to maximize the profit.
注意買賣股票問題用 valley and peak 去解
*/

var maxProfit = function(prices) {
    let index = 0
    let valley
    let peak
    let maxProfit = 0

    while (index < prices.length - 1) {
        while (prices[index] >= prices[index + 1] && index < prices.length - 1) {
            index++
        }
        valley = index
        while (prices[index] <= prices[index + 1] && index < prices.length - 1) {
            index++
        }
        peak = index
        maxProfit += prices[peak] - prices[valley]
    }
    return maxProfit
};

// DP 解法

var maxProfit = function(prices) {
    let dp_i_0 = 0
    let dp_i_1 = - Infinity
    let n = prices.length
    
    if (prices.length === 0) {return 0}
    
    for (let i = 0; i < n; i++) {
        let temp = dp_i_0
        // 注意 dp_i_0 會被改
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, temp - prices[i])
    }
    
    return dp_i_0
};

const prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))