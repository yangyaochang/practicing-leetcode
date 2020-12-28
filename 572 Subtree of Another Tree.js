/*
一開始直覺是想到用 BFS 先找到 root 一樣再用 DFS 檢驗
也可以用 preorder 紀錄整棵樹走完的 path 然後比看看 t 是不是 s 的 substring，注意 null 也要加進去
每個 value 前面加個 , 不然 3 4 null null 會是 23 4 nul null 的 substring
*/

var isSubtree = function(s, t) {
    let queue = []
    
    queue.push(s)
    
    while (queue.length > 0) {
        let current = queue.shift()
        
        if (current.val === t.val) {
            if (isSubtree(current, t)) {return true}
        }
        
        if (current.left) {queue.push(current.left)}
        if (current.right) {queue.push(current.right)}
    }
    
    return false
    
    function isSubtree(root1, root2) {
        
        const dfs = (current1, current2) => {
            if (current1 === null && current2 === null) {return true}
            if (current1 === null || current2 === null) {return false}
            if (current1.val !== current2.val) {return false}

            return isSubtree(current1.left, current2.left) && isSubtree(current1.right, current2.right)
        }
        
        return dfs(root1, root2)
    }
};

var isSubtree = function(s, t) {
    let finished = false

    const dfs = (c1, c2) => {
        if (c1 === null && c2 === null) {return true}
        if (c1 === null || c2 === null) {return false}
        if (c1.val !== c2.val) {return false}

        return dfs(c1.left, c2.left) && dfs(c1.right, c2.right)
    }
    
    const findRoot = (cur) => {
        if (cur === null) {return}
        if (finished) {return}
        
        if (cur.val === t.val) {
            finished = dfs(cur, t)
        }

        findRoot(cur.left)
        findRoot(cur.right)
    }

    findRoot(s)
    return finished
}

// 第三次做

var isSubtree = function(s, t) {
    const queue = []

    queue.push(s)

    while (queue.length > 0) {
        const current = queue.shift()

        if (current.val === t.val) {
            if (dfs(current, t)) {return true}
        }

        if (current.left) {queue.push(current.left)}
        if (current.right) {queue.push(current.right)}
    }

    return false

    function dfs(c1, c2) {
        if (c1 === null && c2 === null) {return true}
        if (c1 === null || c2 === null || c1.val !== c2.val) {return false}

        return dfs(c1.left, c2.left) && dfs(c1.right, c2.right)
    }
}

var isSubtree = function(s, t) {
    const queue = []

    queue.push(s)

    while (queue.length > 0) {
        const current = queue.shift()

        if (current.val === t.val) {
            if (dfs(current, t)) {return true}
        }

        if (current.left) {queue.push(current.left)}
        if (current.right) {queue.push(current.right)}
    }

    return false

    function dfs(p, q) {
        if (p === null && q === null) {return true}
        if (p === null || q === null || p.val !== q.val) {return false}

        return dfs(p.left, q.left) && dfs(p.right, q.right)
    }
}