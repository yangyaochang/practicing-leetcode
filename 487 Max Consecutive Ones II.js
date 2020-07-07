var findMaxConsecutiveOnes = function(nums) {
    let left = -1
    let right = 0
    let flip = 1
    let maxNum = 0

    while (right < nums.length) {
        if (nums[right] === 0) {
            if (flip === 1) {
                flip--
            } else {
                while (flip === 0) {
                    left++
                    if (nums[left] === 0) {flip++}
                }
                continue
            }
        } 
        maxNum = Math.max(maxNum, right - left)
        right++
    }

    return maxNum
};

const nums = [1,0,1,1,0]

console.log(findMaxConsecutiveOnes(nums))