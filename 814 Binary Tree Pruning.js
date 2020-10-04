/*
Time Complexity: O(n)
Space Complexity: O(n)

從底層檢查上來，若是 leaf 且值為 0，則切掉 return null
*/

var pruneTree = function(root) {
    const cut = (cur) => {
        if (cur === null) {return null}

        cur.left = cut(cur.left)
        cur.right = cut(cur.right)

        if (cur.left === null && cur.right === null && cur.val === 0) {
            return null
        } else {
            return cur
        }
    }

    return cut(root)
}

var pruneTree = function(root) {
    if (root === null) {return null}
    
    const dfs = (current) => {
        if (current === null) {return 0}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left === 0) {
            current.left = null
        } 
        if (right === 0) {
            current.right = null
        }
        return left + right + current.val
    }
    
    dfs(root)
    return root
};

var pruneTree = function(root) {
    const dfs = (cur) => {
        if (cur === null) {return 0}
        
        let left = dfs(cur.left)
        let right = dfs(cur.right)
        
        if (left === 0 && right === 0 && cur.val === 0) {
            return 0
        }
        if (left === 0) {cur.left = null}
        if (right === 0) {cur.right = null}
        return 1
    }
    
    if (dfs(root) === 0) {return null}
    return root
};