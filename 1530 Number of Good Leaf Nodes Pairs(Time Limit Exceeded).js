var countPairs = function(root, distance) {
    const leaves = []
    const graph = new Map()
    let num = 0

    const dfs = (current) => {
        if (current === null) {return null}

        if (current === root) {
            graph.set(current, [])
        }
        if (current.left) {
            let neighbors = graph.get(current)
            neighbors.push(current.left)
            graph.set(current, neighbors)
            graph.set(current.left, [current])
        }
        if (current.right) {
            let neighbors = graph.get(current)
            neighbors.push(current.right)
            graph.set(current, neighbors)
            graph.set(current.right, [current])
        }

        let left = dfs(current.left)
        let right = dfs(current.right)

        if (left === null && right === null) {leaves.push(current)}
    }

    dfs(root)

    const getDistance = (start, destination) => {
        const visited = new Set()
        let distance = 0

        const dfsOnGraph = (cur, level) => {
            if (visited.has(cur)) {return}
            if (distance !== 0) {return}
            if (cur === destination) {
                distance = level
                return
            }

            visited.add(cur)

            const neighbors = graph.get(cur)
            for (let i = 0; i < neighbors.length; i++) {
                dfsOnGraph(neighbors[i], level + 1)
            }
        }

        dfsOnGraph(start, 0)
        return distance
    }

    for (let i = 0; i < leaves.length; i++) {
        for (let j = i + 1; j < leaves.length; j++) {
            if (getDistance(leaves[i], leaves[j]) <= distance) {num++}
        }
    }

    return num
};