/*
到 leaf 是兩個 child 都是 null 不是只要一個 null 就是到終點
不用 backtracking 
加 -> 的格式規定是麻煩的地方
*/

var binaryTreePaths = function(root) {
    let list = []
    
    const dfs = (current, path) => {
        if (current === null) {return null}
        
        if (path === '') {path += current.val}
        else {path += `->${current.val}`}
        
        let left = dfs(current.left, path)
        let right = dfs(current.right, path)
        
        if (left === null && right === null) {
            list.push(path)
        }
    }
    
    dfs(root, '')
    return list
};

var binaryTreePaths = function(root) {
    const list = []

    const dfs = (cur, path) => {
        if (cur === null) {return null}

        if (path === '') {path += cur.val}
        else {path += `->${cur.val}`}

        let left = dfs(cur.left, path)
        let right = dfs(cur.right, path)

        if (left === null && right === null) {
            list.push(path)
        }
    }

    dfs(root, '')
    return list
}

// 第三次做

var binaryTreePaths = function(root) {
    const list = []

    const dfs = (current, path) => {
        if (current === null) {return null}

        if (path === '') {path += `${current.val}`} 
        else {path += `->${current.val}`}
    
        let left = dfs(current.left, path)
        let right = dfs(current.right, path)

        if (left === null && right === null) {
            list.push(path)
        }
    }

    dfs(root, '')
    return list
}

// 第五次做

var binaryTreePaths = function(root) {
    const list = []
    
    const dfs = (cur, path) => {
        if (cur === null) {return null}

        if (cur === root) {path += cur.val}
        else {path += `->${cur.val}`}

        let left = dfs(cur.left, path)
        let right = dfs(cur.right, path)

        if (left === null && right === null) {
            list.push(path)
        }
    }

    dfs(root, '')
    return list
}

