/*
Time Complexity: 我覺得是 O(n^2 logn)
*/

var characterReplacement = function(s, k) {
    const cache = {}
    let left = 0
    let right = 0
    let maxLength = 0

    while (right < s.length) {
        if (s[right] in cache) {
            cache[s[right]]++
        } else {
            cache[s[right]] = 1
        }
        
        // 檢查需要改變的字母數是否超過 k
        while (flipNums() > k) {
            if (cache[s[left]] === 1) {
                delete cache[s[left]]
            } else {
                cache[s[left]]--
            }
            left++
        }

        // 在改動次數小於等於 k 的情況下計算目前最長的長度
        maxLength = Math.max(maxLength, right - left + 1)
        // 最後在移動 right pointer 準備檢查下一個字母
        right++
    }

    return maxLength

    function flipNums() {
        const nums = []
        
        // nums 取得每一個字母出現的次數
        for (let char in cache) {
            nums.push(cache[char])
        }

        // 遞增排列後刪掉最大的 剩下就是需要 change 的字母數
        nums.sort((a, b) => a - b)
        nums.pop()

        let sum = nums.reduce((acc, cur) => acc + cur, 0)
        return sum
    }
};