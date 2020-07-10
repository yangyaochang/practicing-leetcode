var isMajorityElement = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {right = mid - 1}
        else if (nums[mid] < target) {left = mid + 1}
        else if (nums[mid] > target) {right = mid - 1}
    }

    let leftMost = left
    left = 0
    right = nums.length - 1

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {left = mid + 1}
        else if (nums[mid] < target) {left = mid + 1}
        else if (nums[mid] > target) {right = mid - 1}
    }

    let rightMost = right

    return rightMost - leftMost + 1 > Math.floor(nums.length / 2)
};

const nums = [2,4,5,5,5,5,5,6,6]
const target = 5

console.log(isMajorityElement(nums, target))