/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var serialize = function(root) {
    let depth = getDepth(root)
    let queue = []
    let list = '['
    
    if (root === null) {return '[null]'}
    
    queue.push([root, 1])
    
    while (queue.length > 0) {
        let [current, level] = queue.shift()
        
        if (current) {
            list += `${current.value},`
            if (level < depth) {
                queue.push([current.left, level + 1])
                queue.push([current.right, level + 1])
            }
        } else {
            list += 'null,'
        }
    }
    
    return list.slice(0, list.length - 1) + ']'

    function getDepth(root) {
        let depth = 0

        const dfs = (current, level) => {
            if (current === null) {
                depth = Math.max(depth, level - 1)
                return
            }

            dfs(current.left, level + 1)
            dfs(current.right, level + 1)
        }

        dfs(root, 1)
        return depth
    }
};

var deserialize = function(data) {
    data = data.slice(1, data.length - 1).split(',').map(value => {
        if (value === 'null') {return null}
        else {return Number(value)}
    })

    if (data[0] === null) {return null}
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

// 第二次做

var serialize = function(root) {
    const list = []
    const queue = []
    
    queue.push(root)
    
    while (queue.length > 0) {
        const current = queue.shift()
        
        if (current === null) {list.push('null')}
        else {list.push(current.val.toString())}
        
        if (current !== null) {
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
    const list = data.split(',')
    
    const queue = []
    const root = new TreeNode(Number(list[0]))
    queue.push(root)
    
    for (let i = 1; i < list.length; i += 2) {
        const current = queue.shift()
        if (list[i] !== 'null') {
            current.left = new TreeNode(Number(list[i]))
            queue.push(current.left)
        }
        
        if (list[i + 1] !== 'null' && i + 1 < list.length) {
            current.right = new TreeNode(Number(list[i + 1]))
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
        const cur = queue.shift()

        if (cur) {list.push(cur.val.toString())}
        else {list.push('null')}

        if (cur) {
            queue.push(cur.left)
            queue.push(cur.right)
        }
    }

    let end = list.length - 1

    while (list[end] === 'null') {
        list.pop()
    }
    return list.join(',')
}

var deserialize = function(data) {
    if (data === '') {return null}
    // 上面這個 edge case 之前不需要處理，我想可能跟我每次處理 data 的方式不一樣有關。重點還是下面重新生成一棵樹的邏輯

    data = data.split(',').map(num => {
        if (num === 'null') {return null}
        else {return Number(num)}
    })

    const root = new TreeNode(data[0])
    const queue = []
    queue.push(root)

    for (let i = 1; i < data.length ; i += 2) {
        const parent = queue.shift()

        if (data[i] !== null) {
            parent.left = new TreeNode(data[i])
            queue.push(parent.left)
        }

        if (i + 1 < data.length && data[i + 1] !== null) {
            parent.right = new TreeNode(data[i + 1])
            queue.push(parent.right)
        }
    }

    return root
}

// 第四次做

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

    const queue = []
    const root = new TreeNode(data[0])

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