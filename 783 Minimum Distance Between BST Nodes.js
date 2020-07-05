var minDiffInBST = function(root) {
    let preNum = null
    let minDiff = Infinity
    
    const inorder = (current, type) => {
        if (current === null) {return null}  
        
        inorder(current.left)
        if (preNum === null) {preNum = current.val}
        else {
            minDiff = Math.min(minDiff, current.val - preNum)
            preNum = current.val
        }
        inorder(current.right)
    }
    
    inorder(root)
    return minDiff
};