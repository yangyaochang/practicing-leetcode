/*
Tree 的問題關鍵在於思考你在那個 node 上要做什麼
*/

var removeLeafNodes = function(root, target) {
    const dfs = (current) => {
        if (current === null) {return null}
        
        current.left = dfs(current.left)
        current.right = dfs(current.right)
        
        if (current.left === null && current.right === null && current.val === target) {
            return null
        }
        
        return current
    }
    
    return dfs(root)
};

var removeLeafNodes = function(root, target) {
    const dfs = (current) => {
        if (current === null) {return null}
        
        current.left = dfs(current.left)
        current.right = dfs(current.right)
        
        if (current.left === null && current.right === null && current.val === target) {return null}
        return current
    }
    return dfs(root)
};

// 第三次做

var removeLeafNodes = function(root, target) {
    const remove = (cur) => {
        if (cur === null) {return null}

        cur.left = remove(cur.left)
        cur.right = remove(cur.right)

        if (cur.left === null && cur.right === null && cur.val === target) {
            return null
        } else {
            return cur
        }
    }

    return remove(root)
}

// 第四次做

var removeLeafNodes = function(root, target) {
    const dfs = (current) => {
        if (current === null) {return null}

        current.left = dfs(current.left)
        current.right = dfs(current.right)

        if (current.left === null && current.right === null) {
            return current.val === target ? null : current
        }
        return current
    }

    return dfs(root)
}