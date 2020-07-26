var findCircleNum = function(M) {
    let adjacentList = {}
    let visited = new Set()
    let count = 0

    for (let i = 0; i < M.length ; i++) {
        adjacentList[i] = []
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1 && i !== j) {adjacentList[i].push(j)}
        }
    }

    const dfs = (current) => {
        if (visited.has(current)) {return}
        
        visited.add(current)

        let friend = adjacentList[current]
        friend.forEach(student => {dfs(student)})
    }

    for (let i = 0; i < M.length; i++) {
        if (!visited.has(i)) {
            count++
            dfs(i)
        }
    }

    return count
};

const M = [[1,1,0],
            [1,1,0],
            [0,0,1]]

console.log(findCircleNum(M))