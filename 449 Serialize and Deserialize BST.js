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

// 第二次做，好像沒有用到 BST 的特性

var serialize = function(root) {
    const list = []
    const queue = []
    
    queue.push(root)
    
    while (queue.length > 0) {
        const current = queue.shift()
        
        if (current === null) {list.push('null')}
        else {
            list.push(current.val.toString())
            queue.push(current.left)
            queue.push(current.right)
        }
    }
    
    while (list[list.length - 1] === 'null') {
        list.pop()
    }
    return list.join(',')
};

var deserialize = function(data) {
    if (data === '') {return null}
    let list = data.split(',')
    list = list.map(str => (str === 'null') ? null : Number(str))
    
    const queue = []
    const root = new TreeNode(list[0])
    queue.push(root)
    
    for (let i = 1; i < list.length; i += 2) {
        const current = queue.shift()
        if (list[i] !== null) {
            current.left = new TreeNode(list[i])
            queue.push(current.left)
        }
        
        if (i + 1 < list.length && list[i + 1] !== null) {
            current.right = new TreeNode(list[i + 1])
            queue.push(current.right)
        }
    } 
    return root
};

// 第三次做

var serialize = function(root) {
    const queue = []
    const list = []

    queue.push(root)

    while (queue.length > 0) {
        const current = queue.shift()

        if (current !== null) {
            list.push(current.val)
            queue.push(current.left)
            queue.push(current.right)
        } else {
            list.push(null)
        }
    }

    while (list[list.length - 1] === null) {
        list.pop()
    }

    return list
}

var deserialize = function(data) {
    if (data.length === 0) {return null}

    const root = new TreeNode(data[0])
    const queue = []

    queue.push(root)

    for (let i = 1; i < data.length; i+=2) {
        const current = queue.shift()

        if (data[i] !== null) {
            current.left = new TreeNode(data[i])
            queue.push(current.left)
        }

        if (i + 1 < data.length && data[i + 1] !== null) {
            current.right = new TreeNode(data[i + 1])
            queue.push(current.right)
        }
    }

    return root
}