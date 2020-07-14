/*
要注意萬一 word1, word2 是一樣的，那麼 index2 是空的
*/

var shortestWordDistance = function(words, word1, word2) {
    let index1 = []
    let index2 = []
    let min = Infinity

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            index1.push(i)
        } else if (words[i] === word2) {
            index2.push(i)
        }
    }

    if (word1 === word2) {
        for (let i = 0; i < index1.length - 1; i++) {
            min = Math.min(Math.abs(index1[i] - index1[i + 1]), min)
        }
    } else {
        for (let i = 0; i < index1.length; i++) {
            for (let j = 0; j < index2.length; j++) {
                min = Math.min(Math.abs(index1[i] - index2[j]), min)
            }
        }    
    }

    return min
};

const words = ["practice", "makes", "perfect", "coding", "makes"]
const word1 = 'makes'
const word2 = 'makes'

console.log(shortestWordDistance(words, word1, word2))