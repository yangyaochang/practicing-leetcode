var searchRange = function(nums, target) {
    let range = [-1, -1]
    let [left, right] = [0, nums.length - 1]
    let mid

    if (target < nums[0] || target > nums[nums.length - 1]) {return range}
    // 找第一個 index
    // 透過 mid 與 taregt 的比較扣除不需要看的部分
    while (left < right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {right = mid}
        else if (nums[mid] > target) {right = mid - 1}
        else {left = mid + 1}
    }

    range[0] = (nums[left] === target) ? left : -1
    left = 0
    right = nums.length - 1
    
    // 找第二個 index
    while (left + 1 < right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {left = mid}
        else if (nums[mid] > target) {right = mid - 1}
        else {left = mid + 1}
    }

    range[1] = (nums[left] === target) ? left : -1
    return range
};

const nums = [1]
const target = 1

console.log(searchRange(nums, target))