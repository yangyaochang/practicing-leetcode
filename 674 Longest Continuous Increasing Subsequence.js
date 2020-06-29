var findLengthOfLCIS = function(nums) {
    let left = 0
    let right = 1
    let maxLength = (nums.length >= 1) ? 1 : 0

    while (right < nums.length) {
        if (nums[right] > nums[right - 1]) {
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        } else {
            left = right
            right ++
        }
    }
    return maxLength
};

const nums = [2,2,2,2,2]

console.log(findLengthOfLCIS(nums))