var minSubArrayLen = function(s, nums) {
    let left = 0
    let right = 0
    let sum = 0
    let minLength = Infinity

    while (right < nums.length) {
        sum += nums[right]
        right++

        while (sum >= s) {
            minLength = Math.min(right - left, minLength)

            sum -= nums[left]
            left++
        }
    }

    if (minLength === Infinity) {return 0}
    return minLength
};

const nums = [2,3,1,2,4,3]
const s = 7

console.log(minSubArrayLen(s, nums))