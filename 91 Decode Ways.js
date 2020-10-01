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