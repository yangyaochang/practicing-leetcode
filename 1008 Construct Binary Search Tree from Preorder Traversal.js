var bstFromPreorder = function(preorder) {
    const buildBST = (left, right) => {
        if (left > right) {return null}
        if (left === right) {return new TreeNode(preorder[left])}
        
        let index = left
        while (preorder[index] <= preorder[left]) {
            index++
        }
        
        const current = new TreeNode(preorder[left])
        current.left = buildBST(left + 1, index - 1)
        current.right = buildBST(index, right)
        return current
    }
    
    return buildBST(0, preorder.length - 1)
};