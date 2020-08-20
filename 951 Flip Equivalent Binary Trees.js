/*
我一開始卡在想要先判斷左右子樹是否一致再調用不同的 recursion，因此用了

if (c1.left.val === c2.left.val && c1.right.val === c2.right.val)

但這會遇到一個問題是，若當中有 null 會無法 read property val of null

解決辦法是乾脆在每一個節點都調用反轉與不反轉的 recursion，只要有一個返回 true 就表示可以透過反轉相等

dfs(c1.left, c2.left) && dfs(c1.right, c2.right) 代表的是同一種走訪方法兩棵樹要一樣才返回 true
(dfs(c1.left, c2.left) && dfs(c1.right, c2.right)) || (dfs(c1.left, c2.right) && dfs(c1.right, c2.left)) 代表的是反轉與不反轉有一成立即可
*/

var flipEquiv = function(root1, root2) {
    const dfs = (c1, c2) => {
        if (c1 === null && c2 === null) {return true}
        if (c1 === null || c2 === null) {return false}
        if (c1.val !== c2.val) {return false}
        
        return (dfs(c1.left, c2.left) && dfs(c1.right, c2.right)) || (dfs(c1.left, c2.right) && dfs(c1.right, c2.left))
    }
    
    return dfs(root1, root2)
};