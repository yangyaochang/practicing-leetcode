/*
Time Complexity: O(k)
That results in O(logn) in the average case, and O(n) in the worst case.
*/

var kthSmallest = function(root, k) {
    let kth
    
    const dfs = (current) => {
        if (current === null) {return}
        if (k === 0) {return}
        
        dfs(current.left)
        if (k > 0) {k--}
        if (k === 0 && kth === undefined) {
            kth = current.val
            return
        }
        dfs(current.right)
    }
    
    dfs(root)
    return kth
};

var kthSmallest = function(root, k) {
    let count = 0
    let target = null

    const dfs = (cur) => {
        if (cur === null) {return}
        if (target) {return}

        dfs(cur.left)
        count++
        if (count === k) {
            target = cur.val
            return
        }
        dfs(cur.right)
    }

    dfs(root)
    return target
};

var kthSmallest = function(root, k) {
    let target = null

    const inorder = (cur) => {
        if (cur === null) {return}
        if (target !== null) {return}

        inorder(cur.left)
        if (k > 1) {k--}
        else if (k === 1 && target === null) {
            target = cur.val
        }
        inorder(cur.right)
    }

    inorder(root)
    return target
};

var kthSmallest = function(root, k) {
    let kth = null

    const dfs = (current) => {
        if (current === null) {return}
        if (kth !== null) {return}

        dfs(current.left)
        k--
        if (k === 0) {kth = current.val}
        dfs(current.right)
    }

    dfs(root)
    return kth
}