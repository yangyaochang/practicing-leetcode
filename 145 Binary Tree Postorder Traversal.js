/*
此題要用 iteration 實現 postorder dfs
利用 stack 搭配 while loop 最後將結果反轉即是 postorder dfs

Time Complexity: O(n)
Space Complexity: O(H) 如果不考慮 list 佔據的記憶體空間的話，stack 佔據的記憶體空間與樹高有關
*/

var postorderTraversal = function(root) {
    if (root === null) {return []}
    
    let list = []
    let stack = []
    
    stack.push(root)
    
    while (stack.length > 0) {
        let current = stack.pop()
        
        list.push(current.val)
        
        if (current.left) {stack.push(current.left)}
        if (current.right) {stack.push(current.right)}
    }
    
    return list.reverse()
};

// 第二次做

var postorderTraversal = function(root) {
    const list = []

    const dfs = (current) => {
        if (current === null) {return}

        dfs(current.left)
        dfs(current.right)
        list.push(current.val)
    }

    dfs(root)
    return list
}
