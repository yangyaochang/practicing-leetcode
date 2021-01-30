var longestConsecutive = function(nums) {
    const quicksort = (arr) => {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i] < arr[e]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                }
            }
            [arr[e], arr[m]] = [arr[m], arr[e]]

            divide(s, m - 1)
            divide(m + 1, e)
        }

        divide(0, arr.length - 1)
        return arr
    }

    if (nums.length === 0) {return 0}
    nums = quicksort(nums)

    let left = 0
    let right = left + 1
    let maxLength = 1
    // 如果不是一個空的 array maxLength 至少是 1
    let duplicates = 0

    while (right < nums.length) {
        // 如果前後差 1
        if (nums[right] - nums[right - 1] === 1) {
            maxLength = Math.max(maxLength, right - left + 1 - duplicates)
            right++
        } else if (nums[right] === nums[right - 1]) {
            // 如果兩數相等
            // 如果有遇到相同數字 紀錄 duplicates 的數目
            duplicates++
            right++
        } else {
            // 剩下狀況 重新找尋
            left = right
            right++
            duplicates = 0
        }
    }

    return maxLength
};