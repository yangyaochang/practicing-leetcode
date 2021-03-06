/*
alphanumeric characters 只英文字母與數字
*/

var isPalindrome = function(s) {
    s = s.match(/[a-zA-Z0-9]/g)

    if (s === null) {return true}
    s = s.map(char => char.toUpperCase())

    let left = 0
    let right = s.length - 1

    while (left <= right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
};

const s = ""

console.log(isPalindrome(s))

// 第二次做

var isPalindrome = function(s) {
    s = s.match(/[a-zA-Z0-9]/g)
    
    if (s === null) {return true}

    s = s.map(letter => letter.toLowerCase())

    let left = 0
    let right = s.length - 1

    while (left <= right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else {
            return false
        }
    }

    return true
};

// 第三次做

var isPalindrome = function(s) {
    s = s.match(/[a-zA-Z0-9]/g)
    
    if (s === null) {return true}
    
    console.log(s)
        
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {return false}
        left++
        right--
    }
    return true
};