/*
將陣列視為 linked list，數學運算式參考中文本 Leetcode
*/

var findDuplicate = function(nums) {
    let fast = nums[nums[0]]
    let slow = nums[0]

    while (slow !== fast) {
        fast = nums[nums[fast]]
        slow = nums[slow]
    }

    slow = 0

    while (slow !== fast) {
        fast = nums[fast]
        slow = nums[slow]
    }
    return fast
};

const nums = [1,3,4,2,2]

console.log(findDuplicate(nums))