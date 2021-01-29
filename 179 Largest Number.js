// 本質上是條件不一樣的排序

var largestNumber = function(nums) {
    const divide = (s, e) => {
        if (s >= e) {return}

        let m = s
        for (let i = s; i < e; i++) {
            // 組起來比較大的數放在前面
            if (`${nums[i]}${nums[e]}` > `${nums[e]}${nums[i]}`) {
                [nums[m], nums[i]] = [nums[i], nums[m]]
                m++
            }
        }
        [nums[m], nums[e]] = [nums[e], nums[m]]

        divide(s, m - 1)
        divide(m + 1, e)
    }

    divide(0, nums.length - 1)
    let num = nums.join('')
    return num[0] === '0' ? '0' : num
};