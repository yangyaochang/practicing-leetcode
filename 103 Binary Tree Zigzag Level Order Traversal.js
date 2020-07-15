var zigzagLevelOrder = function(root) {
    if (root === null) {return []}
    
    let queue = []
    let list = []
    
    queue.push([root, 0])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (level === list.length) {list[level] = []}
        list[level].push(current.val)
        
        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    
    for (let i = 0; i < list.length; i++) {
        if (i % 2 === 1) {list[i].reverse()}
    }
    
    return list
};