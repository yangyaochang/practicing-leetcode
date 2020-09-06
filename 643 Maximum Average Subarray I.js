var findMaxAverage = function(nums, k) {
    let left = 0
    let right = k - 1
    let subTotal = 0

    for (let i = 0; i < k; i++) {
        subTotal += nums[i]
    }

    let avg = subTotal / k

    while (right < nums.length - 1) {
        right++
        left++
        subTotal += nums[right]
        subTotal -= nums[left - 1]

        avg = Math.max(avg, subTotal / k)
    }
    return avg
};

const nums = [1,12,-5,-6,50,3]
const k = 4

console.log(findMaxAverage(nums, k))