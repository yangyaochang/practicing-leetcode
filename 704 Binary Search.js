/*
Time Complexity: O(logn)
Space Complexity: O(1)
*/

var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        
        if (nums[mid] === target) {return mid}
        else if (nums[mid] > target) {right = mid - 1}
        else if (nums[mid] < target) {left = mid + 1}
    }
    return -1
};

const nums = [-1,0,3,5,9,12]
const target = 5

console.log(search(nums, target))