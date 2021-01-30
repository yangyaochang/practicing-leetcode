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