var findNumberOfLIS = function(nums) {
    const dp = new Array(nums.length)
    const count = new Array(nums.length)

    dp.fill(1)
    count.fill(1)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j]
                }
            }
        }
    }

    let num = 0
    const maxLength = Math.max(...dp)

    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === maxLength) {
            num += count[i]
        }
    }
    return num
}

const nums = [1,2,4,3,5,4,7,2]

console.log(findNumberOfLIS(nums))