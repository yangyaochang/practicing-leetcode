/*
在樹狀結構上同時要往下算距離，要往上算距離的時候，將 tree 轉成 graph

Time Complexity: O(n) n = number of nodes
Space Complexity: O(n) the size of the graph
*/

var findClosestLeaf = function(root, k) {
    const graph = {}
    let cloestLeaf

    const dfs = (cur) => {
        if (cur === null) {return}

        if (cur === root) {graph[cur.val] = []}
        if (cur.left) {
            graph[cur.val].push(cur.left.val)
            graph[cur.left.val] = [cur.val]
        }
        if (cur.right) {
            graph[cur.val].push(cur.right.val)
            graph[cur.right.val] = [cur.val]
        }

        dfs(cur.left)
        dfs(cur.right)
    }

    dfs(root)

    const queue = []
    const visited = new Set()
    queue.push(k)
    visited.add(k)

    while (queue.length > 0) {
        const current = queue.shift()

        const neighbors = graph[current]
        if (neighbors.length === 0) {
            cloestLeaf = current
            break
        }
        if (neighbors.length === 1 && current !== root.val) {
            cloestLeaf = current
            break
        }
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                queue.push(neighbors[i])
                visited.add(neighbors[i])
            }
        }
    }

    return cloestLeaf
};

var findClosestLeaf = function(root, k) {
    const graph = {}

    const convertToGraph = (current) => {
        if (current === null) {return}

        if (current === root) {
            graph[current.val] = []
        } 
        if (current.left) {
            graph[current.val].push(current.left.val)
            graph[current.left.val] = [current.val]
        }
        if (current.right) {
            graph[current.val].push(current.right.val)
            graph[current.right.val] = [current.val]
        }

        convertToGraph(current.left)
        convertToGraph(current.right)
    }

    convertToGraph(root)

    const queue = []
    const visited = new Set()

    queue.push(k)
    visited.add(k)

    while (queue.length > 0) {
        const current = queue.shift()

        const neighbors = graph[current]
        if (neighbors.length === 0) {return current}
        if (neighbors.length === 1 && current !== root.val) {return current}

        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                queue.push(neighbors[i])
                visited.add(neighbors[i])
            }
        }
    }
}