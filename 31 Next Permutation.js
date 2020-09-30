/*
Time Complexity: 本來 Brute Force 是窮舉各種排列的 O(n!) 被壓縮成 O(n)
Space Complexity: O(1)
*/

var nextPermutation = function(nums) {
    let index = nums.length - 1

    while (index > 0 && nums[index] <= nums[index - 1]) {
        // 注意元素當中可能有重複，要考慮相等狀況
        index--
    }
    // Fint the item before the strictly decreasing section

    if (index === 0) {return nums.reverse()}

    let swap = nums.length - 1

    while (swap > index - 1 && nums[swap] <= nums[index - 1]) {
        // 注意元素當中可能有重複，要考慮相等狀況
        swap--
    }

    [nums[index - 1], nums[swap]] = [nums[swap], nums[index - 1]]

    return nums.concat(nums.splice(index).reverse())
};

const nums = [1,1,5]

console.log(nextPermutation(nums))