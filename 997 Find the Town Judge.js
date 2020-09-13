var findJudge = function(N, trust) {
    trust = toAdjacentList(trust)
    let judge = null

    for (i = 1; i <= N; i++) {
        if (i in trust === false) {
            if (judge === null) {judge = i}
            else {return -1}
        }
    }

    for (i = 1; i <= N; i++) {
        if (i in trust) {
            if (trust[i].filter(person => person === judge).length !== 1) {return -1}
        }
    }
    return judge
    
    function toAdjacentList(list) {
        let graph = {}

        for (let i = 0; i < list.length; i++) {
            if (list[i][0] in graph) {
                graph[list[i][0]].push(list[i][1])
            } else {
                graph[list[i][0]] = [list[i][1]]
            }
        }

        return graph
    }
};

const trust = [[1,3],[2,3]]
const N = 3

console.log(findJudge(N, trust))

/*
不用使用到 graph 上的 traversal
思考符合 judge 在 adjacent list 裡會有什麼特性

存在唯一一個 neighbors.lenght === 0
其他的 node 都有這個 neighbor
*/

var findJudge = function(N, trust) {
    const graph = {}
    let judge = null

    for (let i = 1; i <= N; i++) {
        graph[i] = []
    }

    for (let i = 0; i < trust.length; i++) {
        graph[trust[i][0]].push(trust[i][1])
    }

    for (let i = 1; i <= N; i++) {
        if (graph[i].length === 0 && judge === null) {
            judge = i
        } else if (graph[i].length === 0 && judge !== null) {
            return -1
        } else if (i === N && judge === null) {
            return -1
        }
    }

    for (let i = 1; i <= N; i++) {
        if (i !== judge) {
            if (graph[i].filter(person => person === judge).length !== 1) {return -1}
        }
    }
    return judge
}

const N = 4
const trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]

console.log(findJudge(N, trust))