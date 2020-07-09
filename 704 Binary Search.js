var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let mid

    while (start < end) {
        mid = Math.floor((start + end) / 2)

        if (nums[mid] === target) {return mid}
        else if (nums[mid] > target) {end = mid - 1}
        else {start = mid + 1}
    } 
    
    if (nums[start] === target) {return start}
    return -1
};

const nums = [-1,0,3,5,9,12]
const target = 5

console.log(search(nums, target))