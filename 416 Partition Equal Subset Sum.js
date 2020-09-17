/*
每次取一個數 nums[index]，有兩個位置可以放
若 path[i] + nums[index] 以大於目標值，則跳過
將 nums 先排序可以降低 Time Complexity
*/

var canPartition = function(nums) {
    let total = 0

    nums.forEach(num => {total += num})

    if (total % 2 !== 0) {return false}
    let subSum  = total / 2
    
    nums.sort((a, b) => b - a)

    const partition = (index, path) => {
        if (index === nums.length) {return path[0] === path[1]}

        for (let i = 0; i < 2; i++) {
            if (nums[index] + path[i] <= subSum) {
                path[i] += nums[index]
                if (partition(index + 1, path)) {return true}
                path[i] -= nums[index]
            }
        }
        return false
    }

    return partition(0, [0, 0])  
};

const nums = [1, 5, 11, 5]

console.log(canPartition(nums))

// 第二次做

var canPartition = function(nums) {
    let total = 0
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }

    if (total % 2 !== 0) {return false}
    let subTotal = total / 2

    const add = (sum, start) => {
        if (sum === subTotal) {return true}
        if (sum > subTotal) {return false}

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {continue}
            if (add(sum + nums[i], i + 1)) {return true}
        }
        return false
    }

    return add(0, 0)
};