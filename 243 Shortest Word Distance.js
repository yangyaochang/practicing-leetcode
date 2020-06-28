var shortestDistance = function(words, word1, word2) {
    let minDistance = Infinity
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            for (let j = 0; j < words.length; j++) {
                if (words[j] === word2) {
                    minDistance = Math.min(minDistance, Math.abs(i - j))
                }
            }
        }
    }
    return minDistance
};

const words = ["practice", "makes", "perfect", "coding", "makes"]
const word1 = "makes"
const word2 = "coding"

console.log(shortestDistance(words, word1, word2))