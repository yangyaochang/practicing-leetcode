/*
給的 logs 並沒有按照 timestamp 排序，要先排序
*/

var earliestAcq = function(logs, N) {
    const graph = {}
    const visited = new Set()

    logs.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < N; i++) {
        graph[i] = []
    }

    for (let i = 0; i < logs.length; i++) {
        visited.clear()
        graph[logs[i][1]].push(logs[i][2])
        graph[logs[i][2]].push(logs[i][1])

        dfs(logs[i][1])
        if (visited.size === N) {return logs[i][0]}
    }

    function dfs(current) {
        if (visited.has(current)) {return}

        visited.add(current)
        const neighbors = graph[current]
        neighbors.forEach(neighbor => {dfs(neighbor)})
    }
};

const logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]]
const N = 6

console.log(earliestAcq(logs, N))