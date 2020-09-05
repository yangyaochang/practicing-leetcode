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

var singleNumber = function(nums) {
    const seen = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in seen === false) {seen[nums[i]] = 0}
        else {delete seen[nums[i]]}
    }

    return Number(Object.keys(seen)[0])
}

const nums = [4,1,2,1,2]

console.log(singleNumber(nums))