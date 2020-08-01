/*
Time Complexity: O(n)
Space Complexity: O(H) => 如果 tree 本身是一個 linked list 那 H = n
*/

var postorder = function(root) {
    let list = []
    if (root === null) {return list}
    
    const dfs = (current) => {
        if (current === null) {return}
        
        let children = current.children
        children.forEach(child => {dfs(child)})
        
        list.push(current.val)
    }
    
    dfs(root)
    return list
};