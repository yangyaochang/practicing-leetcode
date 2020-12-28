var leafSimilar = function(root1, root2) {
    let leaves1 = dfs(root1)
    let leaves2 = dfs(root2)
    
    if (leaves1.length !== leaves2.length) {return false}
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {return false}
    }
    return true
    
    function dfs(root) {
        let list = []
        
        const traverse = (current) => {
            if (current === null) {return null}
        
            let left = traverse(current.left)
            let right = traverse(current.right)
            
            if (left === null && right === null) {
                list.push(current.val)
            }
        }
        traverse(root)
        return list     
    }
};

var leafSimilar = function(root1, root2) {
    const leaves1 = getLeaves(root1)
    const leaves2 = getLeaves(root2)

    if (leaves1.length !== leaves2.length) {return false}

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {return false}
    }

    return true

    function getLeaves(root) {
        const list = []

        const postorderDFS = (cur) => {
            if (cur === null) {return null}

            let left = postorderDFS(cur.left)
            let right = postorderDFS(cur.right)

            if (left === null && right === null) {list.push(cur.val)}
        }

        postorderDFS(root)
        return list
    }
}

// 第三次做

var leafSimilar = function(root1, root2) {

    const getLeaves = (root) => {
        const leaves = []

        const dfs = (current) => {
            if (current === null) {return null}

            let left = dfs(current.left)
            let right = dfs(current.right)

            if (left === null && right === null) {leaves.push(current.val)}
        }

        dfs(root)
        return leaves        
    }

    let leaves1 = getLeaves(root1)
    let leaves2 = getLeaves(root2)

    if (leaves1.length !== leaves2.length) {return false}

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {return false}
    }
    return true
}

// 第四次做

var leafSimilar = function(root1, root2) {
    const getLeaves = (root) => {
        const leaves = []

        const dfs = (current) => {
            if (current === null) {return null}

            let left = dfs(current.left)
            let right = dfs(current.right)

            if (left === null && right === null) {leaves.push(current.val)}
            return current.val
        }

        dfs(root)
        return leaves
    }

    const leaves1 = getLeaves(root1)
    const leaves2 = getLeaves(root2)
    let p1 = 0
    let p2 = 0

    while (p1 < leaves1.length && p2 < leaves2.length) {
        if (leaves1[p1] !== leaves2[p2]) {
            return false
        }
        else {
            p1++
            p2++
        }
    }
    return p1 === leaves1.length && p2 === leaves2.length
}