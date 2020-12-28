/*
基本上就是 traverse 每一個 node 以後把相對應的 (x, y) 與 val 存起來
再按照順序 push 到 list 裡

我在想可不可以紀錄時以 linked list 先幫每個值排序，之後就不用用到 sort 節省 Time Complexity
*/

var verticalTraversal = function(root) {
    const cache = {}
    const list = []
    let xMin = Infinity
    let xMax = -Infinity

    const dfs = (current, x, y) => {
        if (current === null) {return}

        if (x in cache) {
            if (y in cache[x]) {
                cache[x][y].push(current.val)
            } else {
                cache[x][y] = [current.val]
            }
        } else {
            cache[x] = {}
            cache[x][y] = [current.val]    
        }

        xMin = Math.min(x, xMin)
        xMax = Math.max(x, xMax)

        dfs(current.left, x - 1, y - 1)
        dfs(current.right, x + 1, y - 1)
    }

    dfs(root, 0, 0)

    for (let i = xMin; i <= xMax; i++) {
        if (i in cache) {
            const rows = Object.keys(cache[i])
            rows.sort((a, b) => b - a)
        
            let col = []
            for (let j = 0; j < rows.length; j++) {
                if (cache[i][rows[j]].length > 1) {
                    cache[i][rows[j]].sort((a, b) => a - b)
                }
                col = col.concat(cache[i][rows[j]])
            }
            list.push(col)
        }
    }

    return list
};

// 第二次做

var verticalTraversal = function(root) {
    const cache = {}
    let xMin = 0
    let xMax = 0
    const list = []

    const dfs = (current, x, y) => {
        if (current === null) {return}

        xMin = Math.min(xMin, x)
        xMax = Math.max(xMax, x)

        if (x in cache) {   
            if (y in cache[x]) {
                cache[x][y].push(current.val)
            } else {
                cache[x][y] = [current.val]
            }
        } else {
            cache[x] = {}
            cache[x][y] = [current.val]
        }

        dfs(current.left, x - 1, y - 1)
        dfs(current.right, x + 1, y - 1)
    }

    dfs(root, 0, 0)

    for (let i = xMin; i <= xMax; i++) {
        if (i in cache) {
            let col = []
            let y = Object.keys(cache[i])
            y = y.sort((a, b) => b - a)
            
            for (let j = 0; j < y.length; j++) {
                if (cache[i][y[j]].length > 1) {
                    col = col.concat(cache[i][y[j]].sort((a, b) => a - b))
                } else {
                    col.push(cache[i][y[j]][0])
                }
            }

            list.push(col)
        }
    }

    return list
}

// 第三次做

var verticalTraversal = function (root) {
    const cache = {}
    const list = []
    let xMin = 0
    let xMax = 0

    const dfs = (current, x, y) => {
        if (current === null) { return }

        xMin = Math.min(xMin, x)
        xMax = Math.max(xMax, x)

        if (x in cache) {
            if (y in cache[x]) {
                cache[x][y].push(current.val)
            } else {
                cache[x][y] = [current.val]
            }
        } else {
            cache[x] = {}
            cache[x][y] = [current.val]
        }

        dfs(current.left, x - 1, y - 1)
        dfs(current.right, x + 1, y - 1)
    }

    dfs(root, 0, 0)

    for (let i = xMin; i <= xMax; i++) {
        if (i in cache) {
            let column = []

            let y = Object.keys(cache[i]).sort((a, b) => b - a)

            for (let j = 0; j < y.length; j++) {
                if (cache[i][y[j]].length > 1) {
                    cache[i][y[j]].sort((a, b) => a - b)
                }
                column = column.concat(cache[i][y[j]])
            }
            list.push(column)
        }
    }

    return list
}