/*
Binary Search 的延伸
透過檢查 mid 前後來找到 pivot point，若都沒有的話移動 start 或 end，因為已經檢查過 mid 所以確定可以以 mid + 1, mid - 1 的方式移動
*/

var findMin = function(nums) {
    let start = 0
    let end = nums.length - 1
    let mid

    while (start < end && nums[start] > nums[end]) {
        // while loop 在 array 是 rotated and sorted 的情況下才執行
        mid = Math.floor((start + end) / 2)

        if (nums[mid + 1] < nums[mid]) {return nums[mid + 1]}
        else if (nums[mid - 1] > nums[mid]) {return nums[mid]}
        else {
            if (nums[mid] > nums[start]) {start = mid + 1}
            else if (nums[mid] < nums[start]) {end = mid - 1}
        }
    }
    return nums[0]
    // 如果 input 是一個 sorted array 的話直接返回第一個元素
};

const nums = [3,4,5,1,2] 

console.log(findMin(nums))