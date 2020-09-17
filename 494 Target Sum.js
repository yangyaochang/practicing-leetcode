var findTargetSumWays = function(nums, S) {

    const assignSymbols = (sum, index) => {
        if (index === nums.length) {
            if (sum === S) {return 1}
            return 0
        }

        return assignSymbols(sum + nums[index], index + 1) + assignSymbols(sum - nums[index], index + 1)
    }

    return assignSymbols(0, 0)
};

const nums = [1, 1, 1, 1, 1]
const S = 3

console.log(findTargetSumWays(nums, S))