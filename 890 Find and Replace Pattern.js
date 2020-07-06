var findAndReplacePattern = function(words, pattern) {
    let list = []
    
    for (let i = 0; i < words.length; i++) {
        if (compare(words[i], pattern)) {list.push(words[i])}
    }
    
    return list
    
    function compare(word1, word2) {
        let cache1 = {}
        let cache2 = {}

        for (let i = 0; i < word1.length; i++) {
            if (word1[i] in cache1 === false) {
                cache1[word1[i]] = word2[i]
            } else {
                if (cache1[word1[i]] !== word2[i]) {
                    return false
                }
            }
            if (word2[i] in cache2 === false) {
                cache2[word2[i]] = word1[i]
            } else {
                if (cache2[word2[i]] !== word1[i]) {
                    return false
                }
            }
        }
        return true
    }
};

const words = ["abc","deq","mee","aqq","dkd","ccc"]
const pattern = "abb"

console.log(findAndReplacePattern(words, pattern))