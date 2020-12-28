/*
Time Complexity: O(n)
Space Complexity: O(H) => 如果 tree 本身是一個 linked list 那 H = n
*/

var preorder = function(root) {
    if (root === null) {return []}
    
    let list = []
    
    const dfs = (current) => {
        if (current === null) {return}
        
        list.push(current.val)
        let children = current.children
        children.forEach(child => {dfs(child)})
    }
    
    dfs(root)
    return list
};

// 第二次做

var preorder = function(root) {
    const list = []

    const dfs = (current) => {
        if (current === null) {return}

        list.push(current.val)
        for (let i = 0; i < current.children.length; i++) {
            dfs(current.children[i])
        }
    }

    if (root === null) {return list}
    dfs(root)
    return list
}

// 第三次做

var preorder = function(root) {
    const list = []

    const dfs = (current) => {
        if (current === null) {return}

        list.push(current.val)
        current.children.forEach(child => {
            dfs(child)
        })
    }

    if (root === null) {return list}
    dfs(root)
    return list
}