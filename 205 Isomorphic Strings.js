var isIsomorphic = function(s, t) {
    let cache1 = {}
    let cache2 = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i] in cache1 === false) {
            cache1[s[i]] = t[i]
        } else {
            if (cache1[s[i]] !== t[i]) {return false}
        }
        if (t[i] in cache2 === false) {
            cache2[t[i]] = s[i]
        } else {
            if (cache2[t[i]] !== s[i]) {return false}
        }
    }
    return true
};

const s = "paper"
const t = "title"

console.log(isIsomorphic(s, t))

// 第二次做

var isIsomorphic = function(s, t) {
    let ps = 0
    let pt = 0
    const cache = {}
    const cached = new Set()

    if (s.length !== t.length) {return false}

    while (ps < s.length) {
        if (s[ps] in cache) {
            if (cache[s[ps]] === t[pt]) {
                pt++
                ps++
            } else {
                return false
            }
        } else {
            if (cached.has(t[pt])) {return false}
            cache[s[ps]] = t[pt]
            cached.add(t[pt])
            ps++
            pt++
        }
    }
    return true
};