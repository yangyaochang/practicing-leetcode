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

// 第三次做

var lowestCommonAncestor = function(root, p, q) {
    let LCA = null

    let max = Math.max(p.val, q.val)
    let min = Math.min(p.val, q.val)

    const dfs = (cur) => {
        if (cur === null) {return}
        if (LCA !== null) {return}

        if (max > cur.val && cur.val > min) {LCA = cur}
        if (cur.val === max || cur.val === min) {LCA = cur}

        dfs(cur.left)
        dfs(cur.right)
    }
    dfs(root)
    return LCA
}

// BFS 作法

var lowestCommonAncestor = function(root, p, q) {
    const queue = []

    let right = (p.val > q.val) ? p.val : q.val
    let left = (p.val > q.val) ? q.val : p.val

    queue.push(root)

    while (queue.length > 0) {
        const cur = queue.shift()

        if (right > cur.val && cur.val > left) {return cur}
        if (right === cur.val || left === cur.val) {return cur}

        if (cur.left) {queue.push(cur.left)}
        if (cur.right) {queue.push(cur.right)}
    }
};

// 進一步把 BFS 裡的條件合併成只要一個

var lowestCommonAncestor = function(root, p, q) {
    const queue = []
    const left = p.val < q.val ? p.val : q.val
    const right = p.val < q.val ? q.val : p.val

    queue.push(root)

    while (queue.length > 0) {
        const current = queue.shift()

        if (current.val >= left && current.val <= right) {return current}

        if (current.left) {queue.push(current.left)}
        if (current.right) {queue.push(current.right)}
    }
}

// 我覺得這是最快的做法 Time Complexity: O(logn)

var lowestCommonAncestor = function(root, p, q) {
    const large = p.val > q.val ? p.val : q.val
    const small = p.val < q.val ? p.val : q.val
    let current = root

    while (current !== null) {
        if (small <= current.val && current.val <= large) {return current}

        if (current.val > large) {current = current.left}
        else {current = current.right}
    }
}