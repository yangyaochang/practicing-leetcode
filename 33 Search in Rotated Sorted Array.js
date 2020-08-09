/*
Time Complexity: O(logn)
Space Complexity: O(1)

如果是 rotated sorted array，對半分後一定會有一半是 sorted，可以先確定 target 在不在 sorted 的那一半，
如果在直接調用 binarySearch()，如果不在則繼續處理 rotated 的那一半
*/

var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    if (nums.length === 0) {return -1}

    while (nums[left] > nums[right]) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[left]) {
            if (nums[mid] >= target && target >= nums[left]) {
                return binarySearch(left, mid)
            } else {
                left = mid + 1
            }
        } else if (nums[left] > nums[mid]) {
            if (nums[right] >= target && target >= nums[mid]) {
                return binarySearch(mid, right)
            } else {
                right = mid - 1
            }
        } else if (nums[left] === nums[mid]) {
            if (nums[left] === target) {return left}
            else {left = mid + 1}
        }
        // 處理相等狀況注意一下
    }

    return binarySearch(left, right, target, nums)

    function binarySearch(left, right, target, nums) {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) {return mid}
            else if (nums[mid] > target) {right = mid - 1}
            else if (nums[mid] < target) {left = mid + 1}
        }
        return -1
    }
};

const nums = [4,5,6,7,0,1,2]
const target = 0

console.log(search(nums, target))