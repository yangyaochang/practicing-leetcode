## 669. Trim a Binary Search Tree

## 1325. Delete Leaves With a Given Value

669 跟 1325 這種有從下往上重組樹狀結構的
都有將 return value assign 給 current.left, current.right 的操作
後來需要調整樹狀結構的題目都有用到此概念

## 1485. Clone Binary Tree With Random Pointer
## 133 Clone Graph
## 138 Copy List with Random Pointer

以上三題做法極喔類似 可以一併複習，也有用到像 # 1325 一樣重構整棵樹的概念


## 951. Flip Equivalent Binary Trees

我一開始卡在想要先判斷左右子樹是否一致再調用不同的 recursion，因此用了

if (c1.left.val === c2.left.val && c1.right.val === c2.right.val)

但這會遇到一個問題是，若當中有 null 會無法 read property val of null

解決辦法是乾脆在每一個節點都調用反轉與不反轉的 recursion，只要有一個返回 true 就表示可以透過反轉相等

dfs(c1.left, c2.left) && dfs(c1.right, c2.right) 代表的是同一種走訪方法兩棵樹要一樣才返回 true
(dfs(c1.left, c2.left) && dfs(c1.right, c2.right)) || (dfs(c1.left, c2.right) && dfs(c1.right, c2.left)) 代表的是反轉與不反轉有一成立即可

## 1008. Construct Binary Search Tree from Preorder Traversal 

從 array 建立 樹狀結構
把過程的樹狀圖畫出來有幫助建立遞迴

## 98. Validate Binary Search Tree