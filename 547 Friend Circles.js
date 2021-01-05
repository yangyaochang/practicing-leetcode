/*
看到 LeetCode 上留了自己的答案，很短，但已看不懂，不知道當初怎麼想的
*/

var findCircleNum = function(M) {
    let visited = new Set()
    let count = 0

    const dfs = (current) => {
        if (visited.has(current)) {return}

        visited.add(current)    
        for (let i = 0; i < M[current].length; i++) {
            if (M[current][i] === 1) {
                dfs(i)
            }
        }
    }

    for (let i = 0; i < M.length; i++) {
        if (!visited.has(i)) {
            dfs(i)
            count++
        }
    }
    return count 
};

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

// 第二次做

var findCircleNum = function(M) {
    const graph = {}

    for (let i = 0; i < M.length; i++) {
        graph[i] = []
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1 && i !== j) {
                graph[i].push(j)
            }
        }
    }

    const visited = new Set()
    let num = 0

    const dfs = (cur) => {
        if (visited.has(cur)) {return}

        visited.add(cur)
        const neighbirs = graph[cur]

        for (let i = 0; i < neighbirs.length; i++) {
            dfs(neighbirs[i])
        }
    }

    for (let i = 0; i < M.length; i++) {
        if (!visited.has(i)) {
            dfs(i)
            num++
        }
        if (visited.size === M.length) {return num}
    }
}

var findCircleNum = function(M) {
    const adjacentList = toAdjacentList(M)
    const visited = new Set()
    let numOfCircle = 0

    for (let i = 0; i < M.length; i++) {
        if (visited.size === M.length) {return numOfCircle}
        if (!visited.has(i)) {
            numOfCircle++
            dfs(i)
        }
    }
    
    return numOfCircle

    function toAdjacentList(arr) {
        const adjacentList = {}

        for (let i = 0; i < arr.length; i++) {
            adjacentList[i] = []
            for (let j = 0; j < arr[i].length; j++) {
                if (M[i][j] === 1 && i !== j) {
                    adjacentList[i].push(j)
                }
            }
        }
        return adjacentList
    }

    function dfs(student) {
        if (visited.has(student)) {return}

        visited.add(student)
        const friends = adjacentList[student]
        for (let i = 0; i < friends.length; i++) {
            dfs(friends[i])
        }
    }
}

var findCircleNum = function(M) {
    const graph = {}
    const visited = new Set()
    let count = 0

    for (let i = 0; i < M.length; i++) {
        graph[i] = []
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1 && i !== j) {
                graph[i].push(j)
            }
        }
    }

    const dfs = (current) => {
        if (visited.has(current)) {return}

        visited.add(current)

        graph[current].forEach(neighbor => {
            dfs(neighbor)
        })
    }

    for (let i = 0; i < M.length; i++) {
        if (!visited.has(i)) {
            count++
            dfs(i)
        }
    }

    return count
}