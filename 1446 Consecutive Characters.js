var maxPower = function(s) {
    let length = 1
    let maxLength = 1
    let target = s[0]

    for (let i = 1; i < s.length; i++) {
        if (s[i] === target) {
            length++
            maxLength = Math.max(maxLength, length)
        } else {
            target = s[i]
            length = 1
        }
    }
    return maxLength
};

const s = "abbcccddddeeeeedcba"

console.log(maxPower(s))