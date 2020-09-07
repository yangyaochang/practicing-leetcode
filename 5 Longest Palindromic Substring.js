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