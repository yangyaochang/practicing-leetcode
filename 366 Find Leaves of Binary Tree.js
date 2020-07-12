var findLeaves = function(root) {
    let list = []
    
    const dfs = (current) => {
        if (current === null) {return [null, 0]}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left[0] === null && right[0] === null) {
            let index = Math.max(left[1], right[1])
            if (list[index] === undefined) {
                list.push([])
            }
            list[index].push(current.val)
            return [null, index + 1]
        }
    }
    
    dfs(root)
    return list
};