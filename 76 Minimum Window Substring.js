/*
這題 t 可能出現重複的 letter，所以跟 Outco 舉的例子略有不同
*/

var minWindow = function(s, t) {
    let result = [0, Infinity]
    let cache = {}
    let missingNum = t.length
    let left = 0
    let right = 0

    for (let i = 0; i < t.length; i++) {
        if (t[i] in cache) {cache[t[i]]++}
        else {cache[t[i]] = 1}
    }

    while (right < s.length) {
        if (s[right] in cache) {
            if (cache[s[right]] > 0) {
                missingNum--
            }
            cache[s[right]]--
        }
        right++

        while (missingNum === 0 && left < right) {
            // right 是找到後再移動，所以 valid substring 是從 left 到 right - 1，長度只有 right - left
            if (right - left < result[1] - result[0]) {
                result[0] = left
                result[1] = right
            }

            if (s[left] in cache) {
                if (cache[s[left]] === 0) {
                    missingNum++
                }
                cache[s[left]]++
            }
            left++
        }
    }
    
    if (result[1] - result[0] === Infinity) {return ''}
    return s.slice(result[0], result[1])
};

const s = "ADOBECODEBANC"
const t = "ABC"

console.log(minWindow(s, t))

/*
第二次做 code 有比較精簡
*/

var minWindow = function(s, t) {
    const cache = {}
    // numToFind keeps track of how many characters to be found
    let numToFind = 0

    // cache 裡的 value 代表需要找到的個數
    for (let i = 0; i < t.length; i++) {
        if (t[i] in cache) {cache[t[i]]++}
        else {cache[t[i]] = 1}
        numToFind++
    }

    let left = 0
    let right = 0
    let window = [0, Infinity]

    while (right < s.length) {
        if (s[right] in cache) {
            // 是需要找的再扣 numToFind
            if (cache[s[right]] > 0) {numToFind--}
            // 多找到的仍然繼續扣
            cache[s[right]]--
        }

        while (numToFind === 0) {
            window = (right - left < window[1] - window[0]) ? [left, right] : window

            if (s[left] in cache) {
                // 之前可能多找 所以當特定的 character 需要找的數字變為 0 的時候 才加 numToFind
                if (cache[s[left]] === 0) {numToFind++}
                cache[s[left]]++
            }
            left++
        }
        right++
    }

    // 因為最後 right 停的點是要被包含的點 所以輸出時要加 1 
    return window[1] === Infinity ? '' : s.slice(window[0], window[1] + 1)
}