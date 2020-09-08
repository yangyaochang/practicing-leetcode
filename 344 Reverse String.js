/*
String, Array 蠻常用到兩個 pointers 的
*/

var reverseString = function(s) {
    let left = 0
    let right = s.length - 1
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s
};

// 第二次做

var reverseString = function(s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s
}

const s = ["h","e","l","l","o"]

console.log(reverseString(s))