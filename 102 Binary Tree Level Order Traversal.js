var levelOrder = function(root) {
    if (root === null) {return []}
    
    let list = []
    let queue = []
    
    queue.push([root, 1]) 
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level > list.length) {
            list.push([])
        }
        
        list[level - 1].push(current.val)
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    return list
};