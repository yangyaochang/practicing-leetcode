var canPartitionKSubsets = function(nums, k) {
    let totalSum = 0
    let subSum  = 0
    const subSets = new Array(k)
    subSets.fill(0)

    nums.sort((a, b) => - (a - b))
    nums.forEach(num => {
        totalSum += num
    })

    if (totalSum % k !== 0) {return false}
    subSum = totalSum / k

    const partition = (index) => {
        if (index === nums.length) {return true}

        const num = nums[index]

        for (let i = 0; i < subSets.length; i++) {
            if (subSets[i] + num <= subSum) {
                subSets[i] += num
                if (partition(index + 1)) {
                    return true
                }
                subSets[i] -= num
            }
        }
        return false
    }

    return partition(0)
}

const nums = [4, 3, 2, 3, 5, 2, 1]
const k = 4

console.log(canPartitionKSubsets(nums, k))

/*
分成 k 組，代表每一個 num 有最多 k 個選擇可以選，可以放入的條件為，加總不超過 subSum
可以先排除掉 sum 不能被 k 整除的情況
另外排序可以優化的原因我還不知道為什麼
*/

var canPartitionKSubsets = function(nums, k) {
    let sum = 0
    const list = new Array(k)
    list.fill(0)

    nums.sort((a, b) => - (a - b))
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % k !== 0) {return false}
    let subSum = sum / k

    const partition = (index) => {
        if (index === nums.length) {return true}

        for (let i = 0; i < list.length; i++) {
            if (list[i] + nums[index] <= subSum) {
                list[i] += nums[index]
                if (partition(index + 1)) {return true}
                list[i] -= nums[index]
            }
        }
        return false
    }

    return partition(0)
};

const nums = [10,10,10,7,7,7,7,7,7,6,6,6]
const k = 3

console.log(canPartitionKSubsets(nums, k))