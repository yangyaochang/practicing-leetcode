var inorderSuccessor = function(node) {
    let start = node
    const list = []
    
    while (start.parent !== null) {
        start = start.parent
    }
    
    const dfs = (current) => {
        if (current === null) {return}
        
        dfs(current.left)
        list.push(current)
        dfs(current.right)
    }
    
    dfs(start)
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] === node) {return (i === list.lenght - 1) ? null : list[i + 1]}
    }
};

/*
第二次做
如果 node 有右子數，返回右子數最小的點
否則往上找到第一個比 node 大的 parent，如果都沒有表示 node 是最後一個值，就返回 null
*/

var inorderSuccessor = function(node) {
    const dfs = (current) => {
        if (current === null) {return null}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (!left && !right) {return current}
        if (!left) {return current}
        return left
    }
    
    if (node.right !== null) {
        return dfs(node.right)
    } else {
        while (node.parent !== null && node.parent.val < node.val) {
            node = node.parent
        }
        return node.parent
    } 
};