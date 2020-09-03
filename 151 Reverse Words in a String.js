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