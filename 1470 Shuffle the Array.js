var shuffle = function(nums, n) {
    let x = 0
    let y = nums.length / 2
    let list = []

    while (y < nums.length) {
        list.push(nums[x])
        list.push(nums[y])
        x++
        y++
    }
    return list
};  

const nums = [2,5,1,3,4,7]
const n = 3

console.log(shuffle(nums, n))