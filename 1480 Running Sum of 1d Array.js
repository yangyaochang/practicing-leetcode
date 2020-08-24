var runningSum = function(nums) {
    let curSum = 0
    
    nums = nums.map(num => {
        curSum += num
        return curSum
    })
    
    return nums
};