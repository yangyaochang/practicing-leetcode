var leafSimilar = function(root1, root2) {
    let leaves1 = dfs(root1)
    let leaves2 = dfs(root2)
    
    if (leaves1.length !== leaves2.length) {return false}
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {return false}
    }
    return true
    
    function dfs(root) {
        let list = []
        
        const traverse = (current) => {
            if (current === null) {return null}
        
            let left = traverse(current.left)
            let right = traverse(current.right)
            
            if (left === null && right === null) {
                list.push(current.val)
            }
        }
        traverse(root)
        return list     
    }
};