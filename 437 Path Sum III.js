/*
把每一個 node 都視為一顆 tree 的 root node，計算一遍符合條件的 path 數量
因為每有規定要到 leaf，所以只要 pathSum 相等就算一條 valid path
*/

var pathSum = function(root, sum) {
    let count = 0
    
    const dfs = (current) => {
        if (current === null) {return}
        
        countPaths(current)
        
        dfs(current.left)
        dfs(current.right)
    }
    
    dfs(root)
    return count
    
    function countPaths(root) {
        const add = (c, cSum) => {
            if (c === null) {return null}
        
            cSum += c.val
            if (cSum === sum) { 
                count++
            }
            
            add(c.left, cSum)
            add(c.right, cSum)
        }
        
        add(root, 0)
    }
};

var pathSum = function(root, sum) {
    let num = 0

    const dfs = (cur) => {
        if (cur === null) {return}

        num += countPaths(cur, sum)

        dfs(cur.left)
        dfs(cur.right)
    }

    dfs(root)
    return num
    
    function countPaths(root, target) {
        let num = 0

        const dfs = (cur, pathSum) => {
            if (cur === null) {return}

            pathSum += cur.val
            if (pathSum === target) {num++}

            dfs(cur.left, pathSum)
            dfs(cur.right, pathSum)
        }
        dfs(root, 0)
        return num
    }
};