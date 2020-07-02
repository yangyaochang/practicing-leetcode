var validTree = function(n, edges) {
    let visited = new Set()
    let startVertex = null
    let graph = toAdjacentList(edges)
    let isCyclic = false

    if (edges.length === 0 && n === 1) {return true}
    if (edges.length === 0 && n !== 1) {return false}

    const findCycle = (current) => {
        if (visited.has(current)) {return 1}

        visited.add(current)
        let neighbors = graph[current]
        let numOfVisited = 0
        for(let i = 0; i < neighbors.length; i++) {
            numOfVisited += findCycle(neighbors[i])
        }
        if (numOfVisited >= 2) {isCyclic = true} 
        return 0
    }

    findCycle(startVertex)

    if (!isCyclic && visited.size === n) {return true}
    return false

    function toAdjacentList(edges) {
        let graph = {}

        for (let i = 0; i < edges.length; i++) {
            if (!startVertex) {startVertex = edges[i][0]}
            if (edges[i][0] in graph === false) {
                graph[edges[i][0]] = [edges[i][1]]
            } else {
                graph[edges[i][0]].push(edges[i][1])
            }
            if (edges[i][1] in graph === false) {
                graph[edges[i][1]] = [edges[i][0]]
            } else {
                graph[edges[i][1]].push(edges[i][0])
            }
        }
        return graph
    }
};

const n = 4
const edges = [[2,3],[1,2],[1,3]]

console.log(validTree(n, edges))