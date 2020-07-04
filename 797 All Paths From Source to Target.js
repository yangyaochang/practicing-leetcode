// 用 , 把不同 node 的值分開才不會在最後 split('') 的時候把雙位數以上的值拆開

var allPathsSourceTarget = function(graph) {
    let target = graph.length - 1
    graph = toAdjacentList(graph)
    let list = []
    let visited = new Set()

    const dfs = (current, path) => {
        if (visited.has(current)) {return}
        if (current === target) {
            path += current
            list.push(path.split(',').map(ele => Number(ele)))
            return
        }

        visited.add(current)
        path += `${current},`

        // 用 , 把不同 node 的值分開才不會在最後 split('') 的時候把雙位數以上的值拆開

        let neighbors = graph[current]

        for (let i = 0; i < neighbors.length; i++) {
            dfs(neighbors[i], path)
        }
        visited.delete(current)
    }

    dfs(0, '')
    return list
    
    function toAdjacentList(arr) {
        let graph = {}
        
        for (let i = 0; i < arr.length; i++) {
            graph[i] = arr[i]
        }

        return graph
    }
};

const graph = [[4,3,1],[3,2,4],[3],[4],[]]

console.log(allPathsSourceTarget(graph))