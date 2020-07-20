/*
Time Complexity: O(n)
Space Complexity: O(n) => unbalanced tree 跟每一個 node 值都不相同，list 的長度等於 node 數目 
*/

var findMode = function(root) {
    let list = []
    let preValue = null
    let count = 0
    let maxFrequency = 0
    
    const dfs = (current) => {
        if (current === null) {return}
        
        dfs(current.left)
        
        if (preValue !== current.val) {
            preValue = current.val
            count = 1
        } else if (preValue === current.val) {
            count ++
        }
        
        if (count > maxFrequency) {
            maxFrequency = count
            list = [current.val]
        } else if (count === maxFrequency) {
            list.push(current.val)
        }
        
        dfs(current.right)
    }
    
    dfs(root)
    return list
};