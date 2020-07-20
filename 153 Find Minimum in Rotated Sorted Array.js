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

/* 
第二次作答
Time Complexity: O(logn)
Space Complexity: O(1) 
*/

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (nums[left] > nums[right] && left < right - 1) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[left]) {
            left = mid
        } else if (nums[mid] < nums[right]) {
            right = mid
        }
    }

    return (nums[left] < nums[right]) ? nums[left] : nums[right]
};

/*
第三次作答
Time Complexity: O(logn)
Space Complexity: O(logn) 
*/

var findMin = function(nums) {
    return divide(0, nums.length - 1, nums)

    function divide(left, right, nums) {
        if (nums[right] > nums[left]) {return nums[left]}
        if (left === right) {return nums[left]}
        if (right === left + 1) {return Math.min(nums[left], nums[right])}
        
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[left]) {
            return Math.min(nums[left], divide(mid + 1, right, nums))
        } else if (nums[mid] < nums[left]) {
            return Math.min(nums[mid + 1], divide(left, mid, nums))
        }
    }
};


const nums = [3,4,5,1,2] 

console.log(findMin(nums))