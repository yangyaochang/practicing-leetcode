var findMinHeightTrees = function(n, edges) {
    const graph = {}

    edges.forEach(edge => {
        if (edge[0] in graph) {
            graph[edge[0]].push(edge[1])
        } else {
            graph[edge[0]] = [edge[1]]
        }
        if (edge[1] in graph) {
            graph[edge[1]].push(edge[0])
        } else {
            graph[edge[1]] = [edge[0]]
        }
    })

    const visited = new Set()

    const height = (cur) => {
        if (visited.has(cur)) {return 0}

        visited.add(cur)

        const children = graph[cur]
        const returnVal = []
        for (let i = 0; i < children.length; i++) {
            returnVal.push(height(children[i])) 
        }
        visited.delete(cur)
        return Math.max(...returnVal) + 1
    }

    const list = {}
    let minHeight = Infinity

    for (let i = 0; i < n; i++) {
        const h = height(i) - 1
        if (h in list) {list[h].push(i)}
        else {list[h] = [i]}
        minHeight = Math.min(minHeight, h)
    }

    return list[minHeight]
};

const n = 4
const edges = [[1, 0], [1, 2], [1, 3]]

console.log(findMinHeightTrees(n, edges))