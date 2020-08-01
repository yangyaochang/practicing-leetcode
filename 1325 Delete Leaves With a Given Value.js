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