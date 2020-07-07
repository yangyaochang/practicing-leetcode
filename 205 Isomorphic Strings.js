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