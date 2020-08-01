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
