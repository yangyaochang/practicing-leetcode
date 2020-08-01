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