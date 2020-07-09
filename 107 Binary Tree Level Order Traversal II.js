var levelOrderBottom = function(root) {
    let queue = []
    let list = []
    
    if (root === null) {return list}
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (list.length < level) {list.push([])}
        list[level - 1].push(current.val)
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    return list.reverse()
};