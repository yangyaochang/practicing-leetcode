/*
目前最好懂的解法

一次從 nums 裡拿一個數 nums[index] 可以有 k 個選擇可以放，若放進去總合不超過 subSum，則可以進到下一步放下一個數 nums[index + 1]
所以遞迴函數的參數是 index 與，表示分成 k 組的 list[] 是 scope var
想清楚這題每一步驟的選擇怎麼做是最難的 (上面第一句話)，確定窮舉的每一步驟在幹嘛，就可以建立窮舉邏輯。

Base Case 就是能夠取完所有的數，index === nums.length

將 nums 先做遞減排列，由大的數開始嘗試可以減少 Time Complexity
*/

var canPartitionKSubsets = function(nums, k) {
    let total = 0

    nums.forEach(num => {total += num})
    if (total % k !== 0) {return false}
    let subSum = total / k

    const list = new Array(k)
    list.fill(0)

    nums.sort((a, b) => b - a)

    const partition = (index) => {
        if (index === nums.length) {return true}
        // k 個選擇
        for (let i = 0; i < k; i++) {
            if (nums[index] + list[i] <= subSum) {
                list[i] += nums[index]
                if (partition(index + 1)) {
                    return true
                }
                list[i] -= nums[index]
            }
        }
        return false
    }

    return partition(0)
}   

const nums = [4, 3, 2, 3, 5, 2, 1]
const k = 4

console.log(canPartitionKSubsets(nums, k))

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