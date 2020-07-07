var maxDepth = function(root) {
    let queue = []
    let maxDepth = 0
    
    if (root === null) {return 0}
    queue.push([root, 1])
    
    while (queue.length !== 0) {
        let current = queue.shift()
        maxDepth = current[1]
        
        let children = current[0].children
        for (let i = 0; i < children.length; i++) {
            queue.push([children[i], current[1] + 1])
        }
    }
    return maxDepth
};