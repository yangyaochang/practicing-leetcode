/*
若 palindrome 長度 <= 1 直接返回 ''

找第一個不是 a 的字母，找到一半就好
若長度為偶數且中間的字母仍為 a，把最後一個字母換成 b
若長度為奇數且已經找中點，無論中間是否為 a 都把最後一個字母換成 b
*/

var breakPalindrome = function(palindrome) {
    if (palindrome.length <= 1) {return ''}

    palindrome = palindrome.split('')

    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome.length % 2 === 0 && i === (palindrome.length / 2) - 1) {
            if (palindrome[i] === 'a') {
                palindrome.splice(palindrome.length - 1, 1, 'b')
                return palindrome.join('')
            } else {
                palindrome.splice(i, 1, 'a')
                return palindrome.join('')
            }
        }
        if (palindrome.length % 2 === 1 && i === (palindrome.length - 1) / 2) {
            palindrome.splice(palindrome.length - 1, 1, 'b')
            return palindrome.join('')
        }
        if (palindrome[i] !== 'a') {
            palindrome.splice(i, 1, 'a')
            return palindrome.join('')
        }
    }
};

const palindrome = "abba"

console.log(breakPalindrome(palindrome))