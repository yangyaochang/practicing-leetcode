var findRepeatedDnaSequences = function(s) {
    let left = 0
    let right = 1
    let list = []
    let cache = {}

    while (right <= s.length) {
        if (right - left === 10) {
            let subString = s.slice(left, right)
            if (subString in cache && cache[subString] === 1) {
                list.push(subString)
                cache[subString]++
            } else if (subString in cache === false) {
                cache[subString] = 1
            }
            left++
        }
        right++
    }
    return list
};

const s = "AAAAAAAAAAAA"

console.log(findRepeatedDnaSequences(s))
