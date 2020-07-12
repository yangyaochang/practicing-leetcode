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