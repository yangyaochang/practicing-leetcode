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