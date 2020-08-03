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