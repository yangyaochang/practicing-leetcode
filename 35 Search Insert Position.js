var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let mid 

    if (target < nums[start]) {return 0}
    if (target > nums[end]) {return end + 1}

    while (end - start > 1) {
        mid = Math.floor((start + end) / 2)

        if (nums[mid] === target) {return mid}
        else if (nums[mid] < target) {start = mid}
        else {end = mid}
    }

    if (nums[start] === target) {return start}
    if (nums[end] === target) {return end}
    return start + 1
};

const nums = [1,3,5,6]
const target = 7

console.log(searchInsert(nums, target))