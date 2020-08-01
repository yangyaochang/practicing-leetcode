/*
rotated sorted arry 至少可以確定有一半是 sorted，那一半可以用 binary search 找 target 或最小值為第一個元素
但如果有 duplicates 就無法確定哪一半是 sorted

e.g.
[2,2,2,2,2,2,2,2,2]
[2,2,2,2,2,2,3,1,2]
第一個和最後一個元素和 mid 都是一樣的

透過不斷拆成兩半直到只剩下一個或最後一個元素得到最小值

Time Complexity: O(n) => 其實跟線性搜索一樣，跟沒有 duplicates 的 rotated sorted array 不一樣是因為沒有 duplicates 只需要看另外一半，case 變少
Space Complexity: O(n)
*/

var findMin = function(nums) {
    
    const divide = (left, right) => {
        if (left === right) {return nums[left]}
        if (right - left === 1) {return Math.min(nums[left], nums[right])}

        let mid = Math.floor((left + right) / 2)

        return Math.min(divide(left, mid), divide(mid + 1, right))
    }

    return divide(0, nums.length - 1)
};

const nums = [2,2,2,0,1]

console.log(findMin(nums))