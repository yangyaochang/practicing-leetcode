var maxProduct = function(words) {
    let max = 0

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            max = Math.max(productOfLength(words[i], words[j]), max)
        }
    }
    
    return max
    
    function productOfLength(word1, word2) {
        let letters = new Set()

        for (let i = 0; i < word1.length; i++) {
            if (!letters.has(word1[i])) {letters.add(word1[i])}
        }
        for (let i = 0; i < word2.length; i++) {
            if (letters.has(word2[i])) {return 0}
        }
        return word1.length * word2.length
    }
};

const words = ["abcw","baz","foo","bar","xtfn","abcdef"]

console.log(maxProduct(words))