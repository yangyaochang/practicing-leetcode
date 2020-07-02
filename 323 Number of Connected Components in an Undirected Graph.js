var countComponents = function(n, edges) {
    let graph = toAdjacentList(edges)
    let visited = new Set()
    let list = []
    let count = 0

    const dfs = (current) => {
        if (visited.has(current)) {return}

        list.push(current)
        visited.add(current)
        let neighbors = graph[current]
        for (let i = 0; i < neighbors.length; i++) {
            dfs(neighbors[i])
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            count++
            dfs(i)
        }
    }
    return count

    function toAdjacentList(edges) {
        let graph = {}

        for (let i = 0; i < n; i++) {
            graph[i] = []
        }

        for (let i = 0; i < edges.length; i++) {
            graph[edges[i][0]].push(edges[i][1])
            graph[edges[i][1]].push(edges[i][0])
        }
        return graph
    }
};

const n = 5 
const edges = [[0, 1], [1, 2], [3, 4]]

console.log(countComponents(n, edges))