/*
因為是乘積，初始值為 1
因為有負數，會讓最大變最小，最小變最大，所以要同時紀錄最大跟最小值
*/

var maxProduct = function(nums) {
    let curMax = 1
    let curMin = 1
    let max = - Infinity

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            [curMin, curMax] = [curMax, curMin]
        }

        curMax = Math.max(curMax * nums[i], nums[i])
        curMin = Math.min(curMin * nums[i], nums[i])
        max = Math.max(max, curMax)
    }

    return max
}

const nums = [2,3,-2,4]

console.log(maxProduct(nums))