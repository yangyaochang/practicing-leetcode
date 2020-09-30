/*
要跟 516 Longest Palindromic Subsequence 做一下比較
Subsequence 不需要連續 
Substring 需要連續
*/

var longestPalindrome = function(s) {
    const findPalindrome = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.slice(left + 1, right)
    }

    let longest = ''

    for (let i = 0; i < s.length; i++) {
        const palindrome1 = findPalindrome(i, i)
        const palindrome2 = findPalindrome(i, i + 1)

        longest = (palindrome1.length > longest.length) ? palindrome1 : longest
        longest = (palindrome2.length > longest.length) ? palindrome2 : longest
    }

    return longest
};

var longestPalindrome = function(s) {
    let longest = ''

    for (let i = 0; i < s.length; i++) {
        let odd = findPalindrome(i, i, s)
        let even = findPalindrome(i, i + 1, s)

        longest = (odd.length > longest.length) ? odd : longest
        longest = (even.length > longest.length) ? even : longest
    }

    return longest

    function findPalindrome(left, right, str) {
        while (left >= 0 && right < str.length) {
            if (str[left] === str[right]) {
                left--
                right++
            } else {
                break
            }
        }
        return str.slice(left + 1, right)
    }
};

const s = "babad"

console.log(longestPalindrome(s))

/*
第二次做
重點在於知道 palindrome 有兩種可能要檢查
*/

var longestPalindrome = function(s) {
    const lengthOfPalindrome = (left, right) => {
        while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                left--
                right++
            } else {
                break
            }
        }
        return s.slice(left + 1, right)
    }

    let longest = ''

    for (let i = 0; i < s.length; i++) {
        let p1 = lengthOfPalindrome(i, i)
        let p2 = lengthOfPalindrome(i, i + 1)

        longest = (p1.length > longest.length) ? p1 : longest
        longest = (p2.length > longest.length) ? p2 : longest
    }
    return longest
}

const s = "babad"

console.log(longestPalindrome(s))

// 第三次做

var longestPalindrome = function(s) {
    const isPalindrome = (left, right) => {
        if (s[left] === s[right]) {
            while (left >= 0 && right < s.length) {
                if (s[left] === s[right]) {
                    left--
                    right++
                } else {break}
            }
            return [left + 1, right - 1]
        } else {
            return [left + 1, right - 1]
        }
    }

    let maxLength = 0
    let longest = ''

    for (let i = 0; i < s.length; i++) {
        const subStr1 = isPalindrome(i, i)
        const subStr2 = isPalindrome(i, i + 1)

        if (subStr1[1] - subStr1[0] + 1 > maxLength) {
            maxLength = subStr1[1] - subStr1[0] + 1
            longest = s.slice(subStr1[0], subStr1[1] + 1)
        }
        if (subStr2[1] - subStr2[0] + 1 > maxLength) {
            maxLength = subStr2[1] - subStr2[0] + 1
            longest = s.slice(subStr2[0], subStr2[1] + 1)
        }
    }
    return longest
}