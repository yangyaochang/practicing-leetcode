/*
先確認 input array 是長度遞增的
根據題目給的關係建立 graph
以 graph 上的每一個 vertex 為起點做 DFS，並回傳最長路徑
以 visited 為 cache 以 Memoization 優化
從所以返回的長度中找到最大值
*/

var longestStrChain = function(words) {
    const graph = {}

    words.sort((a, b) => a.length - b.length)

    for (let i = 0; i < words.length; i++) {
        graph[words[i]] = []
    }

    for (let i = words.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (words[i].length - words[j].length > 1) {break}
            if (isAdjacent(words[i], words[j])) {
                graph[words[j]].push(words[i])
            }
        }
    }

    const visited = {}

    const dfs = (cur) => {
        if (cur in visited) {return visited[cur]}
        if (graph[cur].length === 0) {return 1}

        const neighbors = graph[cur]
        const lengths = []
        for (let i = 0; i < neighbors.length; i++) {
            lengths.push(dfs(neighbors[i]))
        }
        visited[cur] = Math.max(...lengths) + 1
        return visited[cur]
    }   

    const len = []

    for (let i = 0; i < words.length; i++) {
        len.push(dfs(words[i]))
    }

    return Math.max(...len)

    function isAdjacent(word1, word2) {
        let count = 0 
        let p1 = 0
        let p2 = 0

        if (word1.length - word2.length !== 1) {return false}

        while (p1 < word1.length) {
            if (word1[p1] === word2[p2]) {
                p1++
                p2++
            } else {
                p1++
                count++
            }
        }

        return count === 1
    }
};

const words = ["a","b","ba","bca","bda","bdca"]

console.log(longestStrChain(words))