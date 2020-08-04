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