/*
一開始直覺是想到用 BFS 先找到 root 一樣再用 DFS 檢驗
也可以用 preorder 紀錄整棵樹走完的 path 然後比看看 t 是不是 s 的 substring，注意 null 也要加進去
每個 value 前面加個 , 不然 3 4 null null 會是 23 4 nul null 的 substring
*/

var isSubtree = function(s, t) {
    let queue = []
    
    queue.push(s)
    
    while (queue.length > 0) {
        let current = queue.shift()
        
        if (current.val === t.val) {
            if (isSubtree(current, t)) {return true}
        }
        
        if (current.left) {queue.push(current.left)}
        if (current.right) {queue.push(current.right)}
    }
    
    return false
    
    function isSubtree(root1, root2) {
        
        const dfs = (current1, current2) => {
            if (current1 === null && current2 === null) {return true}
            if (current1 === null || current2 === null) {return false}
            if (current1.val !== current2.val) {return false}

            return isSubtree(current1.left, current2.left) && isSubtree(current1.right, current2.right)
        }
        
        return dfs(root1, root2)
    }
};