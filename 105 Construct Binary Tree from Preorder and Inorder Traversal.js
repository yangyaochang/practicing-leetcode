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

/* 
第二次做
preorder 是用來建立 node
另一個 input array (無論是 inoder 還是 postorder) 適用來計算左子樹與右子樹分別有幾的 node

計算 x 的技巧
子數在兩個 array 的個數應該一樣，建立關係式
*/

var buildTree = function(preorder, inorder) {
    const cache = {}

    for (let i = 0; i < inorder.length; i++) {
        cache[inorder[i]] = i
    }

    const build = (preLeft, preRight, inLeft, inRight) => {
        if (preLeft > preRight) {return null}

        const node = new TreeNode(preorder[preLeft])
        const index = cache[preorder[preLeft]]
        const x = preLeft + index - inLeft

        node.left = build(preLeft + 1, x,  inLeft, index - 1)
        node.right = build(x + 1, preRight, index + 1, inRight)
        return node
    }
    return build(0, preorder.length - 1, 0, inorder.length - 1)
};