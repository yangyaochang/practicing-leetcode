var findLadders = function(beginWord, endWord, wordList) {
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

    const visited = new Set()
    let list = []
    let minLength = Infinity

    const dfs = (current, path) => {
        if (visited.has(current)) {return}
        if (current === endWord) {
            if (path.length < minLength) {
                minLength = path.length
                list = [[...path]]
            } else if (path.length === minLength) {
                list.push([...path])
            }
            return
        }

        visited.add(current)
        const neighbors = graph[current]
        for (let i = 0; i < neighbors.length; i++) {
            path.push(neighbors[i])
            dfs(neighbors[i], path)
            path.pop()
        }
        visited.delete(current)
    }

    dfs(beginWord, [beginWord])
    return list

    function oneDiff (w1, w2) {
        let numOfDiff = 0

        for (let i = 0; i < w1.length; i++) {
            if (w1[i] !== w2[i]) {numOfDiff++}
        }

        return numOfDiff === 1
    }
};

const beginWord = "hit"
const endWord = "cog"
const wordList = ["hot","dot","dog","lot","log","cog"]

console.log(findLadders(beginWord, endWord, wordList))