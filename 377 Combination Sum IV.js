/*
題目說求 combinations 但因為順序不同也算不同，所以實際上是求 permutations
這題其實就是爬樓梯的步數會改變的爬樓梯問題
*/

var combinationSum4 = function(nums, target) {
    const cache = {}

    const choose = (curSum) => {
        if (curSum > target) {return 0}
        if (curSum === target) {return 1}
        if (curSum in cache) {return cache[curSum]}

        let validCombinations = 0

        for (let i = 0; i < nums.length; i++) {
            validCombinations += choose(curSum + nums[i])
        }

        cache[curSum] = validCombinations
        return validCombinations
    }

    return choose(0)
};

const nums = [1,2,3]
const target = 4

console.log(combinationSum4(nums, target))

// Memoization

var combinationSum4 = function(nums, target) {
    const cache = {}

    const add = (sum) => {
        if (sum > target) {return 0}
        if (sum === target) {return 1}
        if (sum in cache) {return cache[sum]}
        
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            count += add(sum + nums[i])
        }
        cache[sum] = count
        return count
    }

    return add(0)
}

const nums = [1, 2, 3]
const target = 4

console.log(combinationSum4(nums, target))

/* 
Tabulation

dp[i] = dp[i - nums[j]] (j = 0 ~ nums.length - 1) if (i - nums[j] >= 0)
*/

var combinationSum4 = function(nums, target) {
    const dp = new Array(target + 1).fill(0)
    // 記得要先有數字之後才能用 dp[i] += dp[i - nums[j]]

    dp[0] = 1

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] >= 0) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    return dp[target]
}

