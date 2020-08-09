// 因為是看 array 裡面的一個區間，所以我用 two pointers

var summaryRanges = function(nums) {
    let left = 0
    let right = left + 1
    const range = []

    while (right <= nums.length) {
        if (nums[right] === nums[right - 1] + 1 && right < nums.length) {
            right++
            continue
        } else {
            if (right === left + 1) {
                range.push(`${nums[left]}`)
            } else {
                range.push(`${nums[left]}->${nums[right - 1]}`)
            }

            if (right === nums.length) {break}

            left = right
            right = left + 1
        }
    }

    return range
};

const nums = [0,2,3,4,6,8,9]

console.log(summaryRanges(nums))