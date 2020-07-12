var isSameTree = function(p, q) {
    let same = true
    
    const dfs = (c1, c2) => {
        if (c1 === null && c2 === null) {return}
        if ((c1 === null && c2 !== null) || (c2 === null && c1 !== null) || (c1.val !== c2.val)) {
            same = false
            return 
        }
        if (!same) {return}
        
        dfs(c1.left, c2.left)
        dfs(c1.right, c2.right)
    }
    
    dfs(p, q)
    return same
};