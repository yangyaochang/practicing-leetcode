/*
Subsequence: Ordered but not continuous

建立一個 dp[i] 紀錄在 nums[i] 之前一共有幾個比 nums[i] 小
*/

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

var lengthOfLIS = function(nums) {
    if (nums.length === 0) {return 0}

    const arr = new Array(nums.length)
    arr.fill(0)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                arr[i] = Math.max(arr[j] + 1, arr[i])
            }
        }
    }
    return Math.max(...arr) + 1
}

const nums = [10,9,2,5,3,7,101,18]

console.log(lengthOfLIS(nums))

/* 
第三次做
怎麼 update dp[i] 的值要多注意
*/

var lengthOfLIS = function(nums) {
    if (nums.length === 0) {return 0}
    const dp = new Array(nums.length)
    dp.fill(0)

    for (let i = nums.length - 2; i >= 0; i--) {
        let max = 0

        for (let j = nums.length - 1; j > i; j--) {
            if (nums[j] > nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]) 
            }
        }
    }

    return Math.max(...dp) + 1
};