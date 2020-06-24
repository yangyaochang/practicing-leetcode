var missingNumber = function(nums) {
    let cache = new Set()
    let missing

    for (let i = 0; i <= nums.length; i++) {
        cache.add(i)
    }

    for (let i = 0; i < nums.length; i++) {
        if (cache.has(nums[i])) {cache.delete(nums[i])}
    }

    for (let num of cache.keys()) {
        missing = num
    }

    return missing
};

const nums = [3,0,1]

console.log(missingNumber(nums))