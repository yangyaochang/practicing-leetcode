/*
使用兩個 pointers 先將不重複的值換到 array 的前半部，最後再將重複元素刪除，節省 time complexity
*/

var removeDuplicates = function(nums) {
    let left = 0
    let right = left + 1

    while (right < nums.length) {
        if (nums[right] !== nums[right - 1]) {
            left++
            nums[left] = nums[right]
        }
        right++
    }

    nums.splice(left + 1)
    return nums.length
}

var removeDuplicates = function(nums) {
    let p = 1

    if (nums.length < 2) {return nums}

    while (p < nums.length) {
        if (nums[p] === nums[p - 1]) {
            nums.splice(p, 1)
        } else {
            p++
        }
    }
    return nums
};

const nums = [1,1,2]

console.log(removeDuplicates(nums))

// 第二次做

var removeDuplicates = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length 
};