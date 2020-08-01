/*
Cycle detection in a directed graph

Time Complexity: O(N + E) => where NN is the number of nodes in the given graph, and EE is the total number of edges. 
時間複雜度比較難想
Space Complexity: O(N) => in additional space complexity.

要注意其實都在用同一個 seen, ancestors set 而且發現 cycle 的 ancestors 是沒有被 delete 的，這是因為 cycle 內的 node 只要在走訪到一樣會發現 cycle，可以直接
一開始判斷 ancestors.has 然後返回。所以實際上有 traverse() 的 node 比我一開始想像的少，這方面要注意
ancestors.has() 要比 seen.has() 先判斷，順序很重要
*/

var eventualSafeNodes = function(graph) {
    let seen = new Set()
    let ancestors = new Set()
    let list = []

    const dfs = (current) => {
        if (ancestors.has(current)) {return false}
        if (seen.has(current)) {return true}

        seen.add(current)
        ancestors.add(current)

        let neighbors = graph[current]

        for (let i = 0; i < neighbors.length; i++) {
            if (!dfs(neighbors[i])) {return false}
        }
        ancestors.delete(current)
        return true
    }

    for (let i = 0; i < graph.length; i++) {
        if (dfs(i)) {
            list.push(i)
        }
    }

    return list
};

const graph = [[1,2],[2,3],[5],[0],[5],[],[]]

console.log(eventualSafeNodes(graph))