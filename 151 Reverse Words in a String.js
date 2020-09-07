var reverseWords = function(s) {
    let reversedStr = []
    
    s = s.split(' ')

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== '') {
            reversedStr.push(s[i])
        }
    }
    return reversedStr.join(' ')
};

const s = "a good   example"

console.log(reverseWords(s))

// 第二次做

var reverseWords = function(s) {
    s = s.split(' ').reverse()

    const reversed = []

    for (let i = 0; i < s.length; i++) {
        if (s[i].length !== 0) {reversed.push(s[i])}
    }

    return reversed.join(' ')
}

const s = "a good   example"

console.log(reverseWords(s))