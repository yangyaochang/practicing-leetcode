var wordBreak = function(s, wordDict) {
    let dictionary = new Set()

    for (let i = 0; i < wordDict.length; i++) {
        dictionary.add(wordDict[i])
    }

    const breakWord = (start) => {
        console.log(start)
        if (start === s.length) {
            return true
        }
        
        for (let end = start + 1; end < s.length + 1; end++) {
            console.log(s.slice(start, end))
            if (dictionary.has(s.slice(start, end)) && breakWord(end)) {
                // short-circuit evaluation 所以不會每個 interation 都調用 breakWord()，要在 dictionary.has(checked) 先成立
                return true
            }
        }
        return false
    }

    return breakWord(0)
};

const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"

const wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]

console.log(wordBreak(s, wordDict))