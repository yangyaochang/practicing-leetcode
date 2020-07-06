var reverseVowels = function(s) {
    let index = []
    let vowls = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
            index.push(i)
            vowls.push(s[i])
        }
    }

    vowls.reverse()
    let str = s.split('')

    for (let i = 0; i < vowls.length; i++) {
        str[index[i]] = vowls[i]
    }

    return str.join('')
};