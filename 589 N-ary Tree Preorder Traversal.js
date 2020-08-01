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