/*
跟 Word Ladder 一樣的題目，記住要把 start 也加到 bank 裡
*/

var minMutation = function(start, end, bank) {
    const graph = {}

    bank.push(start)

    for (let i = 0; i < bank.length; i++) {
        graph[bank[i]] = []
        for (let j = 0; j < bank.length; j++) {
            if (i !== j && isAdjacent(bank[i], bank[j])) {
                graph[bank[i]].push(bank[j])
            }
        }
    }

    const queue = []
    const visited = new Set()

    queue.push([start, 0])
    visited.add(start)

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (current === end) {return level}

        const neighbors = graph[current]
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                visited.add(neighbors[i])
                queue.push([neighbors[i], level + 1])
            }
        }
    }

    return -1

    function isAdjacent(g1, g2) {
        let numOfDiff = 0
        for (let i = 0; i < g1.length; i++) {
            if (g1[i] !== g2[i]) {numOfDiff++}
        }
        return numOfDiff === 1
    }
};

const start = "AACCGGTT"
const end =   "AAACGGTA"
const bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

console.log(minMutation(start, end, bank))