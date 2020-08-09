/*
Time Complexity: O(logn)
Space Complexity: O(1)
*/

var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid
    let position = []

    while (left <= right) {
        mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {right = mid - 1}
        else if (nums[mid] > target) {right = mid - 1}
        else if (nums[mid] < target) {left = mid + 1}
    }

    if (left >= nums.length || nums[left] !== target) {position[0] = -1}
    else {position[0] = left}

    left = 0
    right = nums.length - 1

    while (left <= right) {
        mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {left = mid + 1}
        else if (nums[mid] > target) {right = mid - 1}
        else if (nums[mid] < target) {left = mid + 1}
    }

    if (right < 0 || nums[right] !== target) {position[1] = -1}
    else {position[1] = right}

    return position
}

// 第二次做

var searchRange = function(nums, target) {
    const range = [-1, -1]
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {right = mid - 1}
        else if (nums[mid] > target) {right = mid - 1}
        else if (nums[mid] < target) {left = mid + 1}
    }
    if (left < nums.length && nums[left] === target) {range[0] = left}

    left = 0
    right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {left = mid + 1}
        else if (nums[mid] > target) {right = mid - 1}
        else if (nums[mid] < target) {left = mid + 1}
    }
    if (right >= 0 && nums[right] === target) {range[1] = right}

    return range
};

const nums = [5,7,7,8,8,10]
const target = 6

console.log(searchRange(nums, target))