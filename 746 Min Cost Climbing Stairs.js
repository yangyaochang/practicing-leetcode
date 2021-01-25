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

/*
Tabulation

爬樓題題目的變形，從終點往回走的方式推導出窮舉邏輯，抵達階梯 1 或 0 時為 Base Case，return cost[0] 與 cost[1]
recursive case 則是 return 返回值中的較小值 + cost[i]

由此狀態轉移關係可導出狀態轉移方程式為

dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]), i >= 2
dp[0] = 0
dp[1] = 0

dp[i] 的定義是抵達階梯 i 所需的最小 cost
在階梯 0 與 1 時不需要花費任何 cost
*/

var minCostClimbingStairs = function(cost) {
    const dp = new Array(cost.length + 1)
    dp[0] = 0
    dp[1] = 0

    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }

    return dp[dp.length - 1]
}

/*
Tabulation 並進一步減少 Space Complexity
Time Complexity: O(n)
Space Complexity: O(1)
*/

var minCostClimbingStairs = function(cost) {
    let dp_0 = 0
    let dp_1 = 0
    let dp_i

    if (cost.length === 2) {return Math.min(...cost)}
    if (cost.length === 1) {return cost[0]}

    for (let i = 2; i < cost.length + 1; i++) {
        dp_i = Math.min(dp_1 + cost[i - 1], dp_0 + cost[i - 2])
        dp_0 = dp_1
        dp_1 = dp_i
    }

    return dp_i
}

var minCostClimbingStairs = function(cost) {    
    const climb = (stair) => {
        if (stair === 1 || stair === 0) {return 0}

        return Math.min(climb(stair - 1) + cost[stair - 1], climb(stair - 2) + cost[stair - 2])
    }

    return climb(cost.length)
};


var minCostClimbingStairs = function(cost) {
    const dp = new Array(cost.length + 1)

    dp[0] = 0
    dp[1] = 0

    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }

    return dp[dp.length - 1]
}  

var minCostClimbingStairs = function(cost) {
    let dp_0 = 0
    let dp_1 = 0
    let dp_i

    for (let i = 2; i < cost.length + 1; i++) {
        dp_i = Math.min(dp_1 + cost[i - 1], dp_0 + cost[i - 2])
        dp_0 = dp_1
        dp_1 = dp_i
    }

    return dp_i
};