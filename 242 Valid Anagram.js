var isAnagram = function(s, t) {
    if (s.length !== t.length) {return false}

    const cache = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i] in cache) {cache[s[i]]++}
        else {cache[s[i]] = 1}
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] in cache && cache[t[i]] > 0) {cache[t[i]]--}
        // cache 有 t[i] 但 value <= 0 和 t[i] 不存在 cache 裡都直接返回 false
        else {return false}
    }

    for (let keys in cache) {
        // 如果有不為 0 的值直接返回 false
        if (cache[keys] !== 0) {return false}
    }

    return true
}

// 另外一種做法 如果是 anagram 排序後會長一模一樣 但是排序費時

var isAnagram = function(s, t) {
    if (s.length !== t.length) {return false}
    
    s = s.split('').sort((a, b) => a.localeCompare(b)).join('')
    t = t.split('').sort((a, b) => a.localeCompare(b)).join('')
    
    return s === t
}