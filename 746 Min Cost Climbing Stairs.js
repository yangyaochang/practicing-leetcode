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