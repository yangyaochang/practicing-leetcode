var treeToDoublyList = function(root) {
    const list = []
    
    const dfs = (current) => {
        if (current === null) {return}
        
        dfs(current.left)
        list.push(current)
        dfs(current.right)
    }
    
    dfs(root)
    
    for (let i = 0; i < list.length; i++) {
        if (i === list.length - 1) {
            list[i].right = list[0]
        } else {
            list[i].right = list[i + 1]
        }
        if (i === 0) {
            list[i].left = list[list.length - 1]
        } else {
            list[i].left = list[i - 1]
        }
    }
    return list[0]
};