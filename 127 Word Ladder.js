/*
Time Complexity:
Space Complexity:
*/

var ladderLength = function(beginWord, endWord, wordList) {
    const graph = {}
    const queue = []
    const seen = new Set()

    wordList.push(beginWord)

    for (let i = 0; i < wordList.length; i++) {
        graph[wordList[i]] = []

        for (let j = 0; j < wordList.length; j++) {
            if (countDiff(wordList[i], wordList[j])) {
                graph[wordList[i]].push(wordList[j])
            }
        }
    }
    
    queue.push([beginWord, 1])
    seen.add(beginWord)

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (current === endWord) {return level}

        const neighbors = graph[current]
        for (let i = 0; i < neighbors.length; i++) {
            if (!seen.has(neighbors[i])) {
                queue.push([neighbors[i], level + 1])
                seen.add(neighbors[i])
            }
        }
    }
    
    return 0
    
    function countDiff(word1, word2) {
        let count = 0

        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {count++}
        }

        return count === 1
    }
};

const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot","dot","dog","lot","log","cog"]

console.log(ladderLength(beginWord, endWord, wordList))

/*
第二次做
*/

var ladderLength = function(beginWord, endWord, wordList) {
    const graph = {}

    wordList.push(beginWord)

    for (let i = 0; i < wordList.length; i++) {
        graph[wordList[i]] = []

        for (let j = 0; j < wordList.length; j++) {
            if (oneDiff(wordList[i], wordList[j])) {
                graph[wordList[i]].push(wordList[j])
            }
        }
    }
    
    const queue = []
    const visited = new Set()

    queue.push([beginWord, 1])
    visited.add(beginWord)

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (current === endWord) {return level}
        const neighbors = graph[current]
        neighbors.forEach(w => {
            if (!visited.has(w)) {
                queue.push([w, level + 1])
                visited.add(w)
            }
        })
    }
    
    return 0
    
    function oneDiff (w1, w2) {
        let numOfDiff = 0

        for (let i = 0; i < w1.length; i++) {
            if (w1[i] !== w2[i]) {numOfDiff++}
        }

        return numOfDiff === 1
    }
}

// 用 forEach() 處理 neighbors 會超過 Time Complexity 限制

var ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(beginWord)

    const graph = {}

    for (let i = 0; i < wordList.length; i++) {
        graph[wordList[i]] = []
        for (let j = 0; j < wordList.length; j++) {
            if (i !== j && checkDiff(wordList[i], wordList[j])) {
                graph[wordList[i]].push(wordList[j])
            }
        }
    } 

    const visited = new Set()
    const queue = []
    queue.push([beginWord, 1])
    visited.add(beginWord)

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (current === endWord) {return level}

        const neighbors = graph[current]

        for (let i = 0; i < neighbors.length; i++) {
            if (visited.has(neighbors[i]) === false) {
                queue.push([neighbors[i], level + 1])
                visited.add(neighbors[i])
            }
        }
    }

    return 0
    
    function checkDiff(w1, w2) {
        let count = 0
        let i1 = 0
        let i2 = 0

        while (i1 < w1.length && i2 < w2.length) {
            if (w1[i1] !== w2[i2]) {count++}
            i1++
            i2++
        } 

        return count === 1
    }
}
