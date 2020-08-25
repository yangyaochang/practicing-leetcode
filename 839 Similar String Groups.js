/*
計算有幾團 graph 的概念是 loop through all nodes, if visited set doesn't contain the node then call the dfs and increment count by 1
*/

var numSimilarGroups = function(A) {
    const similar = (w1, w2) => {
        let count = 0
        
        for (let i = 0; i < w1.length; i++) {
            if (w1[i] !== w2[i]) {count++}
        }
        return (count === 0 || count === 2)
    }

    const graph = {}

    for (let i = 0; i < A.length; i++) {
        if (A[i] in graph === false) {graph[A[i]] = []}
        for (let j = i + 1; j < A.length; j++) {
            if (similar(A[i], A[j])) {
                graph[A[i]].push(A[j])
                if (A[j] in graph) {
                    graph[A[j]].push(A[i])
                } else {
                    graph[A[j]] = [A[i]]
                }
            }
        }
    }

    const visited = new Set()

    const dfs = (cur) => {
        if (visited.has(cur)) {return}

        visited.add(cur)
        const neighbors = graph[cur]
        neighbors.forEach(neighbor => dfs(neighbor))
    }
    
    let group = 0

    for (let i = 0; i < A.length; i++) {
        if (!visited.has(A[i])) {
            dfs(A[i])
            group++
        }
    }
    return group
};

const A = ["tars","rats","arts","star"]

console.log(numSimilarGroups(A))