var wordPattern = function(pattern, str) {
    str = str.split(' ')
    let cache1 = {}
    let cache2 = {}

    if (pattern.length !== str.length) {return false}

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] in cache1 === false) {
            cache1[pattern[i]] = str[i]
        } else {
            if (cache1[pattern[i]] !== str[i]) {return false}
        }
        if (str[i] in cache2 === false) {
            cache2[str[i]] = pattern[i]
        } else {
            if (cache2[str[i]] !== pattern[i]) {return false}
        }
    }
    return true
};

const pattern = "abba"
const str = "dog cat cat dog"

console.log(wordPattern(pattern, str))