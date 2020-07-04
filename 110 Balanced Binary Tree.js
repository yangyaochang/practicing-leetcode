var isBalanced = function(root) {
    let balanced = true
    
    const postorder = (current) => {
        if (current === null) {return 0}
        
        let left = postorder(current.left)
        let right = postorder(current.right)
        
        if (balanced && Math.abs(left - right) > 1) {balanced = false}
        return Math.max(left, right) + 1
    }
    
    postorder(root)
    return balanced
};