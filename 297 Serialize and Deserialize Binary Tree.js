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