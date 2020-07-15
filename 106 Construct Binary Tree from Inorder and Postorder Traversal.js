function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(inorder, postorder) {
    let cache = {}
    
    for (let i = 0; i < inorder.length; i++) {
        cache[inorder[i]] = i
    }
    
    const build = (inLeft, inRight, postLeft, postRight) => {
        if (inLeft > inRight || postLeft > postRight) {return null}
        
        let root = new TreeNode(postorder[postRight])
        let index = cache[postorder[postRight]]
        let x = postLeft + index - inLeft
        
        root.left = build(inLeft, index - 1, postLeft, x - 1)
        root.right = build(index + 1, inRight, x, postRight - 1)
            
        return root
    }
    
    return build(0, inorder.length - 1, 0, postorder.length - 1)
};

const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]

console.log(buildTree(inorder, postorder))