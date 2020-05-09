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