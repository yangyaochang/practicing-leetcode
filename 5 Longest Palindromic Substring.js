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