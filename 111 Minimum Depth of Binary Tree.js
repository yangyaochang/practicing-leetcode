/*
Leaf node 是兩邊都收到 null
*/

var minDepth = function(root) {
    if (root === null) {return 0}
    
    let minLevel = Infinity
    
    const dfs = (current, level) => {
        if (current === null) {return null}
        
        let left = dfs(current.left, level + 1)
        let right = dfs(current.right, level + 1)
        
        if (left === null && right === null) {
            minLevel = Math.min(minLevel, level)
        } 
    }
    
    dfs(root, 1)
    return minLevel
};