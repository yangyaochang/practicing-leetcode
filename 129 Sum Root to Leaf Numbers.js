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