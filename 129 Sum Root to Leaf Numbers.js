/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

var sumNumbers = function(root) {
    let sum = 0
    if (root === null) {return sum}
    
    const dfs = (current, path) => {
        if (current === null) {return null}
        
        path += current.val
        
        let left = dfs(current.left, path)
        let right = dfs(current.right, path)
        
        if (left === null && right === null) {
            sum += Number(path)
        }
    }
    
    dfs(root, '')
    return sum
};

var sumNumbers = function(root) {
    let sum = 0

    const dfs = (cur, path) => {
        if (cur === null) {return null}

        path += cur.val
    
        let left = dfs(cur.left, path)
        let right = dfs(cur.right, path)

        if (left === null && right === null) {
            sum += Number(path)
        }
    }

    dfs(root, '')
    return sum
}

var sumNumbers = function(root) {
    let sum = 0

    const dfs = (cur, path) => {
        if (cur === null) {return null}

        path += cur.val
        let left = dfs(cur.left, path)
        let right = dfs(cur.right, path)

        if (left === null && right === null) {
            sum += Number(path)
        }
    }

    dfs(root, '')
    return sum
}

var sumNumbers = function(root) {
    let total = 0

    const dfs = (current, path) => {
        if (current === null) {return null}

        path += current.val

        let left = dfs(current.left, path)
        let right = dfs(current.right, path)

        if (left === null && right === null) {
            total += Number(path)
        }
        return current.val
    }

    dfs(root, '')
    return total
}