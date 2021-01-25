var allCellsDistOrder = function(R, C, r0, c0) {
    const visited = new Set()
    const queue = []
    const list = []

    queue.push([r0, c0])
    visited.add(`${r0}_${c0}`)

    while (queue.length > 0) {
        const [row, col] = queue.shift()

        list.push([row, col])

        if (row - 1 >= 0 && !visited.has(`${row - 1}_${col}`)) {
            queue.push([row - 1, col])
            visited.add(`${row - 1}_${col}`)
        }
        if (row + 1 < R && !visited.has(`${row + 1}_${col}`)) {
            queue.push([row + 1, col])
            visited.add(`${row + 1}_${col}`)
        }
        if (col - 1 >= 0 && !visited.has(`${row}_${col - 1}`)) {
            queue.push([row, col - 1])
            visited.add(`${row}_${col - 1}`)
        }
        if (col + 1 < C && !visited.has(`${row}_${col + 1}`)) {
            queue.push([row, col + 1])
            visited.add(`${row}_${col + 1}`)
        }
    }

    return list
};
