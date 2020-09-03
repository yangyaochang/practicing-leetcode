/*
多起點，多終點的走訪
先用 DFS 找到第一個島，將所有點存到一個 queue 裡
再利用 BFS 擴展第一個島直到碰到第二個島

因為是 queue 所以會優先處理完 level 最小的點
因為用的是同一個 visited set 所以第一個島上的點在 BFS 時不會再被走訪
*/

var shortestBridge = function(A) {
    const queue = []
    const visited = new Set()
    let minDistance = Infinity

    const dfs = (row, col) => {
        const position = `${row}_${col}`
        if (row < 0 || col < 0 || row >= A.length || col >= A[0].length) {return}
        if (A[row][col] === 0) {return}
        if (visited.has(position)) {return}

        queue.push([row, col, 0])
        A[row][col] = 2
        // Mark the first island
        visited.add(position)

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === 1 && queue.length === 0) {
                dfs(i, j)
            }
        }
    }

    while (queue.length > 0) {
        const [r, c, level] = queue.shift()

        if (A[r][c] === 1) {
            minDistance = Math.min(minDistance, level)
        }

        if (r - 1 >= 0 && !visited.has(`${r - 1}_${c}`)) {
            queue.push([r - 1, c, level + 1])
            visited.add(`${r - 1}_${c}`)
        }
        if (r + 1 < A.length && !visited.has(`${r + 1}_${c}`)) {
            queue.push([r + 1, c, level + 1])
            visited.add(`${r + 1}_${c}`)
        }
        if (c - 1 >= 0 && !visited.has(`${r}_${c - 1}`)) {
            queue.push([r, c - 1, level + 1])
            visited.add(`${r}_${c - 1}`)
        }
        if (c + 1 < A[0].length && !visited.has(`${r}_${c + 1}`)) {
            queue.push([r, c + 1, level + 1])
            visited.add(`${r}_${c + 1}`)
        }
    }

    return minDistance - 1
};

const A = [[0,1,0],[0,0,0],[0,0,1]]

console.log(shortestBridge(A))

/*
多起點多終點的走訪，搜尋起點與終點的最短距離
先用 DFS 走訪第一格 island，將 island 1 存到一個 queue 裡並更改值以避免 BFS 時重複走訪
將 queue 裡的位置一個一個取出來搜尋與之相臨最近的 1 的距離
*/

var shortestBridge = function(A) {
    const queue = []
    // Push the first island to the queue

    const dfs = (row, col) => {
        const position = `${row}_${col}`

        if (row < 0 || col < 0 || row >= A.length || col >= A[0].length) {return}
        if (A[row][col] === 0 || A[row][col] === 2) {return}

        queue.push([row, col])
        A[row][col] = 2

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === 1 && queue.length === 0) {
                dfs(i, j)
            }
        }
    }

    const bfs = (row, col) => {
        const q = []
        const v = new Set()

        q.push([[row, col], 0])
        v.add(`${row}_${col}`)

        while (q.length > 0) {
            const [[r, c], level] = q.shift()

            if (A[r][c] === 1) {return level - 1}

            if (r - 1 >= 0 && A[r - 1][c] !== 2 && !v.has(`${r - 1}_${c}`)) {
                q.push([[r - 1, c], level + 1])
                v.add(`${r - 1}_${c}`)
            }
            if (r + 1 < A.length && A[r + 1][c] !== 2 && !v.has(`${r + 1}_${c}`)) {
                q.push([[r + 1, c], level + 1])
                v.add(`${r + 1}_${c}`)
            }
            if (c - 1 >= 0 && A[r][c - 1] !== 2 && !v.has(`${r}_${c - 1}`)) {
                q.push([[r, c - 1], level + 1])
                v.add(`${r}_${c - 1}`)
            }
            if (c + 1 < A[0].length && A[r][c + 1] !== 2 && !v.has(`${r}_${c + 1}`)) {
                q.push([[r, c + 1], level + 1])
                v.add(`${r}_${c + 1}`)
            }
        }
        return 0
    }

    let minDis = Infinity
    while (queue.length > 0) {
        const start = queue.shift()

        const dis = bfs(start[0], start[1])
        if (dis !== 0) {
            minDis = Math.min(dis, minDis)
        }
    }
    return minDis
};