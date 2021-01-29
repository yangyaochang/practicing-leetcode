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

/*
用 bit manipulation，搭配 reduce 一行解決

a ^ 0 = a

a ^ a = 0

a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b

*/

var singleNumber = function(nums) {
    return nums.reduce((acc, cur) => acc ^ cur, 0)
};