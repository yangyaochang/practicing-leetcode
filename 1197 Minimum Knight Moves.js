/*
Implement a BFS starting at (0, 0)
At each position, the knight has 8 directions to go
Keep track of the level
If it reaches the destination, return the level  
*/

var minKnightMoves = function(x, y) {
    const queue = []
    const visited = new Set()

    queue.push([[0, 0], 0])
    visited.add('0_0')

    while (queue.length > 0) {
        const [[current_0, current_1], level] = queue.shift()

        if (current_0 === x && current_1 === y) {
            return level
        }

        if (!visited.has(`${current_0 + 2}_${current_1 + 1}`)) {
            queue.push([[current_0 + 2, current_1 + 1], level + 1])
            visited.add(`${current_0 + 2}_${current_1 + 1}`)
        }
        if (!visited.has(`${current_0 + 2}_${current_1 - 1}`)) {
            queue.push([[current_0 + 2, current_1 - 1], level + 1])
            visited.add(`${current_0 + 2}_${current_1 - 1}`)
        }
        if (!visited.has(`${current_0 - 2}_${current_1 + 1}`)) {
            queue.push([[current_0 - 2, current_1 + 1], level + 1])
            visited.add(`${current_0 - 2}_${current_1 + 1}`)
        }
        if (!visited.has(`${current_0 - 2}_${current_1 - 1}`)) {
            queue.push([[current_0 - 2, current_1 - 1], level + 1])
            visited.add(`${current_0 - 2}_${current_1 - 1}`)
        }
        if (!visited.has(`${current_0 + 1}_${current_1 - 2}`)) {
            queue.push([[current_0 + 1, current_1 - 2], level + 1])
            visited.add(`${current_0 + 1}_${current_1 - 2}`)
        }
        if (!visited.has(`${current_0 - 1}_${current_1 - 2}`)) {
            queue.push([[current_0 - 1, current_1 - 2], level + 1])
            visited.add(`${current_0 - 1}_${current_1 - 2}`)
        }
        if (!visited.has(`${current_0 + 1}_${current_1 + 2}`)) {
            queue.push([[current_0 + 1, current_1 + 2], level + 1])
            visited.add(`${current_0 + 1}_${current_1 + 2}`)
        }
        if (!visited.has(`${current_0 - 1}_${current_1 + 2}`)) {
            queue.push([[current_0 - 1, current_1 + 2], level + 1])
            visited.add(`${current_0 - 1}_${current_1 + 2}`)
        }
    }
};

const x = 2
const y = 1

console.log(minKnightMoves(x, y))