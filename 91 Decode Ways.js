/*
要能夠最後用 Dynamic Programming 優化，關鍵在於分析時要從還沒被 decoded 的 string 來想
'2326' 的結果可由 '326', '26' 推來，依此類推
所以要推得 '2326' 的答案會需要解決 '326', '26', '6' 的子問題
故 
Time Complexity: O(n)
Space Complexity: O(n)
*/

var numDecodings = function(s) {
    const cache = {}

    const decode = (str) => {
        if (str.length === 0) {return 1}
        if (str in cache) {return cache[str]}

        let returnVal1 = 0
        let returnVal2 = 0
        if (str[0] !== '0') {
            returnVal1 = decode(str.slice(1))
        }
        let num = Number(str.slice(0, 2))
        if (str[0] !== '0' && str.length >= 2 && num > 0 && num <= 26) {
            returnVal2 = decode(str.slice(2))
        }

        cache[str] = returnVal1 + returnVal2
        return cache[str]
    }

    return decode(s)
};

const s = "226"

console.log(numDecodings(s))

// 第二次做

var numDecodings = function(s) {
    const cache = {}

    const decode = (str) => {
        if (str.length === 0) {return 1}
        if (str in cache) {return cache[str]}

        let val1 = 0
        let val2 = 0

        if (str[0] !== '0') {
            val1 = decode(str.slice(1))
        }
        const num = Number(str.slice(0, 2))
        if (str[0] !== '0' && num <= 26 && str.length >= 2) {
            val2 = decode(str.slice(2))
        }

        cache[str] = val1 + val2
        return cache[str]
    }

    return decode(s)
}

/*
用 left, right 去分出正在檢查的段落我覺得程式碼更好懂
有點像是用一個空字串 開始從 s 中拿一段一段出來拼出結果
*/

var numDecodings = function(s) {
    const cache = {}
    
    // left 是正在檢查的 s 段落的起點
    const decode = (left) => {
        if (left === s.length) {return 1}
        if (left in cache) {return cache[left]}

        cache[left] = 0
        let right = left + 1
        // 當 right 還沒出界 由 left, right 切出來的數字在 1 ~ 26 之間時 是一個合乎規則的 code
        // 處理 edge case: 當 input 是 '0' 的時候 所以要多加一個 Number(s.slice(left, right)) > 0
        while (right <= s.length && Number(s.slice(left, right)) <= 26 && Number(s.slice(left, right)) > 0) {
            cache[left] += decode(right)
            right++
        }
        return cache[left]
    }

    return decode(0)
}