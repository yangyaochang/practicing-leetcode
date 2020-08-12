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