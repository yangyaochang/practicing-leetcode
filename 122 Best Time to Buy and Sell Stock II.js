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

const prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))