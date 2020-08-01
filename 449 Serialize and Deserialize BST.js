var serialize = function(root) {
    let list = []
    let queue = []
    
    if (root === null) {return 'null'}
    
    queue.push(root)
    
    while (queue.length > 0) {
        let current = queue.shift()
        
        if (current !== null) {
            list.push(current.val.toString())
            queue.push(current.left)
            queue.push(current.right)
        } else {
            list.push('null')
        }
    }
    return list.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function(data) {
    if (data === 'null') {return null} 
    
    data = data.split(',').map(value => {
        return (value === 'null') ? null : Number(value)
    })
    
    let root = new TreeNode(data[0])
    let queue = []
    queue.push(root)
    
    for (let i = 1; i < data.length; i+=2) {
        let current = queue.shift()
        if (data[i] !== null) {
            current.left = new TreeNode(data[i])
            queue.push(current.left)
        }
        if (data[i + 1] !== null && i + 1 < data.length) {
            current.right = new TreeNode(data[i + 1])
            queue.push(current.right)
        }
    }
    
    return root
};