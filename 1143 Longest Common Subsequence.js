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

// Brute force

var longestCommonSubsequence = function(text1, text2) {

    const findLCS = (p1, p2) => {
        if (p1 === -1 || p2 === -1) {return 0}

        if (text1[p1] === text2[p2]) {
            return findLCS(p1 - 1, p2 - 1) + 1
        } else {
            return Math.max(findLCS(p1 - 1, p2), findLCS(p1, p2 - 1))
        }
    }

    return findLCS(text1.length - 1, text2.length - 1)
}

// Tabulation

var longestCommonSubsequence = function(text1, text2) {
    const dp = []

    for (let i = 0; i <= text1.length; i++) {
        const row = new Array(text2.length + 1).fill(0)
        dp.push(row)
    }

    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j<= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // 注意一下為什麼是 text1[i - 1] === text2[j - 1] 為什麼要 - 1，思考一下其實很直觀，但如何在思考解題的時候避免忘掉這裡我還不清楚

                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[text1.length][text2.length]
}

