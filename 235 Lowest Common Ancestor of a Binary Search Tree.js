var lowestCommonAncestor = function(root, p, q) {
    let lca
    let found = false
    
    const dfs = (current) => {
        if (current === null) {return false}
        if (found) {return}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        let currentIsTarget = (current === p || current === q) ? true : false
        
        if ((left && right) || (left && currentIsTarget) || (right && currentIsTarget)) {
            lca = current
            found = true
        }
        return currentIsTarget || left || right
    }
    
    dfs(root)
    return lca
};

/*
第二次的做法有用到 BST 的特性
因為這是一棵 BST，如果 p, q 分別比 current node 大跟小，則 current node 是 lca
因為已經經過上述的檢測了，如果 current node 是 p, q  的其中一個，那麼無論另一個 target node 是否大於或小於 current node
current node 都是 lca
*/

var lowestCommonAncestor = function(root, p, q) {
    let lca = null
    
    const dfs = (current) => {
        if (current === null) {return}
        if (lca) {return}
        
        if ((p.val < current.val && q.val > current.val) || (q.val < current.val && p.val > current.val)) {
            lca = current
            return
        }
        if (current === p || current === q) {
            lca = current
            return
        }
            
        dfs(current.left)
        dfs(current.right)
    }
    
    dfs(root)
    return lca
};

var lowestCommonAncestor = function(root, p, q) {
    let LCA = null

    if (p.val > q.val) {
        let temp = p
        p = q
        q = temp
    }

    const dfs = (cur) => {
        if (cur === null) {return}
        if (LCA !== null) {return}
        if (cur.val >= p.val && cur.val <= q.val) {
            LCA = cur
            return 
        }

        dfs(cur.left)
        dfs(cur.right)
    }
    dfs(root)
    return LCA
};