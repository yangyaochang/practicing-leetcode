/*
可以從 0, 1 開始走的題目，不知道如何從窮舉開始推導
*/

var minCostClimbingStairs = function(cost) {
    let minCost = new Array(cost.length + 2)
    minCost.fill(0)

    for (let i = 3; i <= cost.length + 1; i++) {
        minCost[i] = Math.min(minCost[i - 1] + cost[i - 2], minCost[i - 2] + cost[i - 3])
    }

    return minCost.pop()
};

const cost = [10, 15, 20]

console.log(minCostClimbingStairs(cost))

var minCostClimbingStairs = function(cost) {
    const minCost = new Array(cost.length + 1)
    minCost[0] = 0
    minCost[1] = 0
    
    for (let i = 2; i < minCost.length; i++) {
        minCost[i] = Math.min(minCost[i - 1] + cost[i - 1], minCost[i - 2] + cost[i - 2])
    }

    return minCost.pop()
};