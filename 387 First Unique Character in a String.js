var firstUniqChar = function(s) {
    let countChar = {}
    let char = s.split('')

    if (char.length === 0) {return -1}
    
    char.forEach((char) => {
        if (countChar[char]) {
            countChar[char].count++
        } else {
            countChar[char] = {
                count: 1
            }
        }
    })

    for (let i = 0; i < char.length; i++) {
        if (countChar[char[i]].count === 1) {
            return i
        } else {
            if (i === char.length - 1) {
                return -1
            } else {
                continue
            }
        }
    }
};

// 第二次做

var firstUniqChar = function(s) {
    const frequency = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i] in frequency) {frequency[s[i]]++}
        else {frequency[s[i]] = 1}
    }

    for (let i = 0; i < s.length; i++) {
        if (frequency[s[i]] === 1) {return i}
    }
    return -1
}