var moveZeroes = function(nums) {
    let swapPosition = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[swapPosition], nums[i]] = [nums[i], nums[swapPosition]]
            swapPosition++
        }
    }
    return nums
};

const nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums))