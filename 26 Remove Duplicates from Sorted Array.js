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