var lengthOfLIS = function(nums) {
    if (nums.length === 0) {return 0}
    
    let dp = new Array(nums.length)
    dp.fill(1)
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    
    return Math.max(...dp)
};