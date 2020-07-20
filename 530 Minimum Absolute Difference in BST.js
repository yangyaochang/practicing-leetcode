/*
Time Complexity: O(n)
Space Complexity: O(n)

一個 node 的 lowerLimit 與 upperLimit 是與這個 node 最接近的兩個值
*/

var getMinimumDifference = function(root) {
    let minDiff = Infinity
    
    const dfs = (current, lowerLimit, upperLimit) => {
        if (current === null) {return}
        
        if (lowerLimit !== undefined) {
            minDiff = Math.min(minDiff, Math.abs(current.val - lowerLimit))
        }
        if (upperLimit !== undefined) {
            minDiff = Math.min(minDiff, Math.abs(current.val - upperLimit))
        }
        
        dfs(current.left, lowerLimit, current.val)
        dfs(current.right, current.val, upperLimit)
    }
    
    if (root === null) {return 0}
    dfs(root)
    return minDiff
};