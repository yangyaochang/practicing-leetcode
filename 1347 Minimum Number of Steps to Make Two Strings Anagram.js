var minSteps = function(s, t) {
    let cache = {}
    let steps = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] in cache) {
            cache[s[i]]++
        } else {
            cache[s[i]] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] in cache) {
            if (cache[t[i]] > 1) {
                cache[t[i]]--
            } else {
                delete cache[t[i]]
            }
        } else {steps++}
    }
    return steps
};

const s = "leetcode"
const t = "practice"

console.log(minSteps(s, t))