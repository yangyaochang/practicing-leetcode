var findMaxConsecutiveOnes = function(nums) {
    let left = -1
    let right = 0
    let length = 0

    while (right < nums.length) {
        if (nums[right] === 1) {
            length = Math.max(length, right - left)
        } else {
            left = right
        }
        right++
    }

    return length
};

const nums = [1,1,0,1,1,1]

console.log(findMaxConsecutiveOnes(nums))