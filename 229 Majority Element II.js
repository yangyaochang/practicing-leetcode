var majorityElement = function(nums) {
    let list = []
    let cache = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (!cache.has(nums[i])) {
            cache.set(nums[i], 1)
        } else {
            let times = cache.get(nums[i])
            cache.set(nums[i], times + 1)
        }
    }

    for (let item of cache.entries()) {
        if (item[1] > Math.floor(nums.length / 3)) {list.push(item[0])}
    }
    return list
};

const nums = [1,1,1,3,3,2,2,2]

console.log(majorityElement(nums))