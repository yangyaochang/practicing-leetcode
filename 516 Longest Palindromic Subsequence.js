/*
Subsequence 先想窮舉，得到 recursion relation 再使用二維 DP
DP 的 base case 填完後，觀察剩餘的 case 要怎麼填，這題是從底端填回來的
*/

var longestPalindromeSubseq = function(s) {

    const findPalindrome = (left, right) => {
        if (left === right) {return 1}
        if (left > right) {return 0}

        if (s[left] === s[right]) {
            return findPalindrome(left + 1, right - 1) + 2
        } else {
            return Math.max(findPalindrome(left + 1, right), findPalindrome(left, right - 1))
        }
    }

    return findPalindrome(0, s.length - 1)
};

var longestPalindromeSubseq_DP = function(s) {
    let dp = []

    for (let i = 0; i < s.length; i++) {
        let row = new Array(s.length)
        row.fill(0)
        dp.push(row)
    }

    for (i = 0; i < s.length; i++) {
        dp[i][i] = 1
    }

    for (i = s.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[0][s.length - 1]
};

const s = "bbbab"

console.log(longestPalindromeSubseq(s))
console.log(longestPalindromeSubseq_DP(s))