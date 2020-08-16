/*
把確認是否為 BST 與計算 node 個數的函數分開，後續應該可以藉由若同一個 level 已經找完且有 valid BST 後結束函數來優化
*/ 

var largestBSTSubtree = function(root) {
    const queue = []
    let maxNum = 0
    
    queue.push(root)
    
    while (queue.length > 0) {
        const cur = queue.shift()
        
        if (isBST(cur)) {
            maxNum = Math.max(maxNum, countNodes(cur))
        }
        
        if (cur.left) {queue.push(cur.left)}
        if (cur.right) {queue.push(cur.right)}
    }

    return maxNum
    
    function isBST(root) {
        const dfs = (cur, lower, upper) => {
            if (cur === null) {return true}
            if (lower !== null && cur.val <= lower) {return false}
            if (upper !== null && cur.val >= upper) {return false}
            
            return dfs(cur.left, lower, cur.val) && dfs(cur.right, cur.val, upper)
        }
        
        return dfs(root, null, null)
    }

    function countNodes(root) {
        let num = 0
        const dfs = (cur) => {
            if (cur === null) {return}

            num++
            dfs(cur.left)
            dfs(cur.right)
        }
        dfs(root)
        return num
    }
};