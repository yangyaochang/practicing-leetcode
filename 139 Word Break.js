// 用 Memoization 優化後過關

var wordBreak = function(s, wordDict) {
    const dict = new Set(wordDict)
    const cache = {}

    const helper = (left) => {
        if (left === s.length) {return true}
        if (left in cache) {return cache[left]}

        let right = left
        
        // 用 left 來計入 cache 因為 right 已經在移動
        while (right <= s.length) {
            if (dict.has(s.slice(left, right)) && helper(right) === true) {
                cache[left] = true
                return true
            } else {
                right++
            }
        }
        cache[left] = false
        return false
    }

    return helper(0)
}

const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"

const wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]

console.log(wordBreak(s, wordDict))

