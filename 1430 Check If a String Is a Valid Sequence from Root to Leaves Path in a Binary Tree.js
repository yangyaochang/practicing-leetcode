var isValidSequence = function(root, arr) {
    
    const dfs = (cur, index) => {
        if (cur === null && index === arr.length) {return true}
        if (cur === null) {return false}
        
        if (cur.val === arr[index]) {
            let left = dfs(cur.left, index + 1)
            let right = dfs(cur.right, index + 1)

            // arr 走到底的時候要確認所在的 node 是 leaf
            if (index === arr.length - 1) {
                return left && right
            }
            return left || right
        }
        return false
    }
    return dfs(root, 0)
};
