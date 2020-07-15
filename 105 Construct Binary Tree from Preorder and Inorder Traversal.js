var buildTree = function(preorder, inorder) {
    let cache = {}
    
    for (let i = 0; i < inorder.length; i++) {
        cache[inorder[i]] = i
    }
    
    const build = (preLeft, preRight, inLeft, inRight) => {
        if (preLeft > preRight || inLeft > inRight) {return null}
        
        let root = new TreeNode(preorder[preLeft])
        let index = cache[preorder[preLeft]]
        let x = index - inLeft + preLeft
        
        root.left = build(preLeft + 1, x, inLeft, index - 1)
        root.right = build(x + 1, preRight, index + 1, inRight)
        
        return root
    }
    
    return build(0, preorder.length - 1, 0, inorder.length - 1)
};