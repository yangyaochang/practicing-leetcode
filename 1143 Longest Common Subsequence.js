/*
求 str1, str2 的 longest common subsequence (lcs) 長度，subsequence letter 排列順序不變
lcs 裡的 letter 必定會出現在 str1, str2 裡
如果 str1, str2 都有這個 letter，則這個 letter 必定出現在 lcs
從後面開始比是為了理解之後的 DP table
*/

function longestCommonSubsequence(str1, str2) {

    const loop = (p1, p2) => {
        if (p1 === -1 || p2 === -1) {return 0}

        if (str1[p1] === str2[p2]) {
            // 找到一個一樣，長度加一往後繼續找
            return loop(p1 - 1, p2 - 1) + 1
        } else {
            // 遇到不一樣探尋不同可能，回傳較大的
            return Math.max(loop(p1 - 1, p2), loop(p1, p2 - 1))
        }
    }

    return loop(str1.length - 1, str2.length - 1)
}

const str1 = 'babcde'
const str2 = 'cde'

console.log(longestCommonSubsequence(str1, str2))



function longestCommonSubsequence_DP(str1, str2) {
    let dp = []

    for (let i = 0; i <= str2.length; i++) {
        let row = new Array(str1.length + 1)
        row.fill(0)
        dp.push(row)
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str1[j - 1] === str2[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[str2.length][str1.length]
}

console.log(longestCommonSubsequence_DP(str1, str2))
