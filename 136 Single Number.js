var singleNumber = function(nums) {
    let seen = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {seen.add(nums[i])}
        else {seen.delete(nums[i])}
    }
    return [...seen].join('')
};

const nums = [4, 1, 2, 1, 2]
console.log(singleNumber(nums))