/*
在 graph 上做 DFS 如果有 backtracking，那 visited 只會紀錄正在走的那條 path 已經走過的 nodes
*/

var leadsToDestination = function(n, edges, source, destination) {
    const graph = {}

    for (let i = 0; i < edges.length; i++) {
        if (edges[i][0] in graph) {
            graph[edges[i][0]].push(edges[i][1])
        } else {
            graph[edges[i][0]] = [edges[i][1]]
        }
    }

    if (destination in graph) {return false}
    const visited = new Set()

    const dfs = (cur) => {
        if (cur === destination) {return true}
        if (cur in graph === false) {return false}
        if (visited.has(cur)) {return false}

        visited.add(cur)

        const neighbors = graph[cur]
        for (let i = 0; i < neighbors.length; i++) {
            if (dfs(neighbors[i]) === false) {
                visited.delete(cur)
                return false
            }
        }
        visited.delete(cur)
        return true
    }

    return dfs(source)
};

const n = 3
const edges = [[0,1],[0,2]]
const source = 0
const destination = 2

console.log(leadsToDestination(n, edges, source, destination))