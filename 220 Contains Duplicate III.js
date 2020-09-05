var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        let index = i - 1

        while (index >= 0 && index >= i - k) {
            if (Math.abs(nums[index] - nums[i]) <= t) {return true}
            index--
        }

        index = i + 1

        while (index < nums.length && index <= i + k) {
            if (Math.abs(nums[index] - nums[i]) <= t) {return true}
            index++
        }
    }
    return false
};

const nums = [1,2,3,1]
const k = 3
const t = 0

console.log(containsNearbyAlmostDuplicate(nums, k, t))