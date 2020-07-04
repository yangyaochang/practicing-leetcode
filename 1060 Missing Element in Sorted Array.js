var missingElement = function(nums, k) {
    let index = 0
    let current = nums[index]

    while (index < nums.length) {
        if (current + 1 === nums[index + 1]) {
            index++
            current = nums[index]
        } else {
            k--
            current++
        }
        if (k === 0) {return current}
    }
    return nums[nums.length - 1] + k
};

const nums = [1,2,4]
const k = 3

console.log(missingElement(nums, k))