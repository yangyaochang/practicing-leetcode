var findSecondMinimumValue = function(root) {
    let secondMin = Infinity
    
    const dfs = (cur) => {
        if (cur.left === null) {return}
        
        if (cur.val === cur.left.val) {
            if (cur.right.val !== cur.val) {
                secondMin = Math.min(secondMin, cur.right.val)
            }
            dfs(cur.left)
        }
        if (cur.val === cur.right.val) {
            if (cur.left.val !== cur.val) {
                secondMin = Math.min(secondMin, cur.left.val)
            }
            dfs(cur.right)
        }
    }
    
    dfs(root)
    return (secondMin === Infinity) ? -1 : secondMin
};