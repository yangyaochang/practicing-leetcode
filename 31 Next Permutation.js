/*
以 [1,2,3] 為例，所有的 permutation 按照 lexicographical order 排列，就是由大到小取所有的 permutations 會得到

[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]

以 [1,3,2] 為例，按照窮曲樹狀邏輯來看
在 index = 2 時只有 2 可以選
在 index = 1 時只有 3 可以選
在 index = 0 時有 1, 2, 3 可以選，這時候就是可以換成下一個 permutation 的時候

index = 0 的位置是 the first item before strictly decreasing section
要換成比本來的大的數中最小的
之後一直沿著樹狀最左邊走，也就是要變成遞增排列

Time Complexity: O(n)
Space Complexity: O(1)
*/

var nextPermutation = function(nums) {
    let index = nums.length - 1

    while (nums[index] <= nums[index - 1] && index > 0) {
        index--
    }
    index--

    if (index === -1) {return nums.reverse()}

    let swap = nums.length - 1

    while (nums[swap] <= nums[index]) {
        swap--
    }

    [nums[index], nums[swap]] = [nums[swap], nums[index]]

    let left = index + 1
    let right = nums.length - 1

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
    return nums
}

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