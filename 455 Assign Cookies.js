var findContentChildren = function(g, s) {
    let gIndex = 0
    let sIndex = 0

    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    while (sIndex < s.length) {
        if (s[sIndex] >= g[gIndex]) {
            sIndex++
            gIndex++
        } else {
            sIndex++
        }
    }
    return gIndex 
};

const g = [1,2]
const s = [1,2,3]

console.log(findContentChildren(g, s))

// 第二次做

var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let count = 0
    let pointer_g = 0
    let pointer_s = 0

    while (pointer_s < s.length && pointer_g < g.length) {
        if (s[pointer_s] >= g[pointer_g]) {
            count++
            pointer_g++
            pointer_s++
        } else if (s[pointer_s] < g[pointer_g]) {
            pointer_s++
        }
    }

    return count
};