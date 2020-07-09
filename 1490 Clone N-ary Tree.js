/*
這題的 base case 寫的位置與一般方法不同
*/

var cloneTree = function(root) {
    if (root === null) {return null}
    
    const dfs = (current) => {
        let currentNode =  new Node(current.val)

        if (current.children.length === 0 ) {return currentNode}
        
        for (let i = 0; i < current.children.length; i++) {
            currentNode.children.push(dfs(current.children[i]))
        }
        return currentNode
    }
    return dfs(root)
};