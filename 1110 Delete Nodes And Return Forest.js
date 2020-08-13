/*
Time Complexiity: O(n * m) => m is the length of to_delete array
Space Complexity: O(n)
*/

var delNodes = function(root, to_delete) {
    const roots = []
    
    const dfs = (current) => {
        if (current === null) {return false}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left) {current.left = null}
        if (right) {current.right = null}
        
        for (let i = 0; i < to_delete.length; i++) {
            if (current.val === to_delete[i]) {
                if (current.left) {roots.push(current.left)}
                if (current.right) {roots.push(current.right)}
                to_delete.splice(i, 1)
                return true
            }
        }
        return false
    }
    
    if (!dfs(root)) {
        roots.push(root)
    }
    return roots
};