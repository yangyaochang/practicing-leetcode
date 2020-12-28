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

// 第二次做

var levelOrder = function(root) {
    const queue = []
    const list = []

    if (root === null) {return list}
    queue.push([root, 0])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (list.length === level) {list.push([])}
        list[level].push(current.val)

        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }
    return list
}

// 第三次做

var levelOrder = function(root) {
    const queue = []
    const list = []

    if (root === null) {return list}
    queue.push([root, 1])

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (level > list.length) {list.push([current.val])}
        else {list[level - 1].push(current.val)}

        if (current.left) {queue.push([current.left, level + 1])}
        if (current.right) {queue.push([current.right, level + 1])}
    }

    return list
}