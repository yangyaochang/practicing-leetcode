/*
Time Complexity: O(n)
Space Complexity: O(n) => 因為 worst case 之下可能不是一個 balances binary tree，最壞情況是 binary tree 長得像 linked list
*/

var isValidBST = function(root) {
    if (root === null) {return null}
    
    const dfs = (current, upperLimit, lowerLimit) => {
        if (current === null) {return true}
        
        if (upperLimit !== undefined && upperLimit <= current.val) {return false}
        if (lowerLimit !== undefined && lowerLimit >= current.val) {return false}
        
        return (dfs(current.left, current.val, lowerLimit) && dfs(current.right, upperLimit, current.val))
    }
    
    return dfs(root)
};

var isValidBST = function(root) {

    const dfs = (cur, lowerLimit, upperLimit) => {
        if (cur === null) {return true}
        if (lowerLimit && cur.val <= lowerLimit) {return false}
        if (upperLimit && cur.val >= upperLimit) {return false}
        
        return dfs(cur.left, lowerLimit, cur.val) && dfs(cur.right, cur.val, upperLimit)
    }

    return dfs(root, null, null)
}

var isValidBST = function(root) {
    const validate = (cur, upperLimit, lowerLimit) => {
        if (cur === null) {return true}
        if (upperLimit !== null && cur.val >= upperLimit) {return false}
        if (lowerLimit !== null && cur.val <= lowerLimit) {return false}
        
        return validate(cur.left, cur.val, lowerLimit) && validate(cur.right, upperLimit, cur.val)
    }
    
    return validate(root, null, null)
}

var isValidBST = function(root) {

    const validate = (current, upperLimit, lowerLimit) => {
        if (current === null) {return true}
        if (upperLimit !== undefined && current.val > upperLimit) {return false}
        if (lowerLimit !== undefined && current.val < lowerLimit) {return false}
        
        return validate(current.left, current.val, lowerLimit) && validate(current.right, upperLimit, current.val)
    }

    return validate(root, undefined, undefined)
}

var isValidBST = function(root) {
    const dfs = (current, upperLimit, lowerLimit) => {
        if (current === null) {return true}
        if (upperLimit !== undefined && current.val >= upperLimit) {return false}
        if (lowerLimit !== undefined && current.val <= lowerLimit) {return false}

        return dfs(current.left, current.val, lowerLimit) && dfs(current.right, upperLimit, current.val)
    }

    return dfs(root, undefined, undefined)
}
