var canPermutePalindrome = function(s) {
    let count = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i] in count) {
            count[s[i]]++
        } else {
            count[s[i]] = 1
        }
    }

    let keys = Object.keys(count)
    let numOfOdd = 0

    for (let i = 0; i < keys.length; i++) {
        if (count[keys[i]] % 2 === 1) {numOfOdd++}
    }

    return numOfOdd <= 1
};

const s = "carerac"

console.log(canPermutePalindrome(s))

// 第二次做

var canPermutePalindrome = function(s) {
    let numOfOdd = 0
    const chars = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] in chars) {chars[s[i]]++}
        else {chars[s[i]] = 1}
    }

    const keys = Object.keys(chars)

    keys.forEach(key => {
        if (chars[key] % 2 === 1) {numOfOdd++}
    })

    return numOfOdd <= 1
}