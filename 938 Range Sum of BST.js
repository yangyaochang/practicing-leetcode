var rangeSumBST = function(root, L, R) {
    let list = []
    let sum = 0
    
    const inorder = (current) => {
        if (current === null) {return}
        
        inorder(current.left)
        list.push(current.val)
        inorder(current.right)
    }
    
    inorder(root)
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= L && R >= list[i]) {
            sum += list[i]
        }
    }
    return sum
};