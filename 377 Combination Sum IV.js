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