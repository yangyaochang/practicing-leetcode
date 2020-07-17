/*
Time Complexity: O(logn)
Space Complexity: O(1)
*/

var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {return mid}
        else if (nums[mid] > target) {right = mid - 1}
        else if (nums[mid] < target) {left = mid + 1}
    }

    return left
};

const nums = [1,3,5,6]
const target = 7

console.log(searchInsert(nums, target))