/*
用 visited 紀錄最早到達 node 的時間，若不是最早到達的時間可以直接 return 
*/

var networkDelayTime = function(times, N, K) {
    const graph = {}
    const visited = {}

    for (i = 1; i <= N; i++) {
        graph[i] = []
    }

    times.forEach(edge => {
        graph[edge[0]].push([edge[1], edge[2]])
    })

    const dfs = (current, time) => {
        if (current in visited && time >= visited[current]) {return}

        visited[current] = time
        const neighbors = graph[current]
        neighbors.forEach(neighbor => {
            dfs(neighbor[0], time + neighbor[1])
        })
    }

    dfs(K, 0)
    const keys = Object.keys(visited)
    let time = 0

    if (keys.length !== N) {return -1}
    keys.forEach(node => {
        time = Math.max(time, visited[node])
    })
    return time
};

const times = [[2,1,1],[2,3,1],[3,4,1]]
const N = 4
const K = 2

console.log(networkDelayTime(times, N, K))
