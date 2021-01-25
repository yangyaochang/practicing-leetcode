var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let curSum = 0
    let left = 0
    let right = 0

    while (right < nums.length) {
        curSum += nums[right]
        maxSum = Math.max(maxSum, curSum)

        if (curSum <= 0) {
            left = right + 1
            right = left
            curSum = 0
        } else if (curSum > 0) {
            right++
        }
    }
    return maxSum
}

// 下面這個作法更簡潔

var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currentSum = nums[0]

    for (let fast = 1; fast < nums.length; fast++) {
        if (currentSum < 0) {currentSum = 0}
        currentSum = currentSum + nums[fast]
        if (currentSum > maxSum) {maxSum = currentSum}
    }
    return maxSum
};

// 第三次做

var maxSubArray = function(nums) {
    let left = 0
    let right = 0
    let sum = 0
    let maxSum = -Infinity

    while (right < nums.length) {
        sum += nums[right]
        maxSum = Math.max(maxSum, sum)

        if (sum <= 0) {
            left = right + 1
            right = left
            sum = 0
        } else if (sum > 0) {
            right++
        }
    }

    return maxSum
};

/*
第四次做
我覺得用兩個 pointers 定義好是閉區間後，順著邏輯推下去就比較不會不知道步驟怎麼走
*/

var maxSubArray = function(nums) {
    let left = 0
    let right = 0
    let curSum = nums[right]
    let maxSum = curSum

    while (right < nums.length - 1) {
        if (curSum <= 0) {
            right++
            left = right
            curSum = nums[right]
        } else {
            right++
            curSum += nums[right]
        }
        maxSum = Math.max(maxSum, curSum)
    }

    return maxSum
}

/*
沒有要求哪一段，用一個 curSum 就好
*/

var maxSubArray = function(nums) {
    let curSum = 0
    let maxSum = -Infinity

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i]
        maxSum = Math.max(maxSum, curSum)
        if (curSum < 0) {curSum = 0}
    
    }

    return maxSum
};