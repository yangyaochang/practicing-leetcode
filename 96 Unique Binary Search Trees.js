/*
原始想法：
給定一個排序的好的數列 1 ~ n 來建立 BST，為了知道可以建立幾個結構不同的 BST，我們可以嘗試 iterate 每個數字 i，以 i 作為根節點
以 i 左邊的序列 (1 ~ i - 1) 建立 i 的左子樹，以 i 右邊的序列 (i + 1 ~ n) 建立 i 的右子樹
以同樣的邏輯建立左右子樹

可以推得：
以 f(i, n) 表示數列長度為 n，以 i 為根節點所能建立的 BST 個數 (n >= i >= 1)，注意 n 代表的是長度，數列是從哪裡開始到哪裡結束並不重要
以 g(n) 表示長度為 n 的數列可以建立的 BST 個數

可以推得 g(n) = f(i, n) 之和 (i = 1 ~ n) -> 打不出 sigma
// 第一式

g(n) 是我們要求得解

以數列 [1,2,3,4,5,6,7] 為例
f(3, 7) = 3 左邊的數列能建立的 BST 個數 + 3 右邊的數列能建立的 BST 個數
        = g(2) * g(4) 

所以 f(i, n) = g(i - 1) * g(n - i)
// 第二式

兩式合併得
g(n) = g(i - 1) * g(n - i) 之和 (i = 1 ~ n)
g(0) = 1, g(1) = 1
// 根節點為 null 算一種情況
*/

var numTrees = function(n) {
    const dp = new Array(n + 1)
    dp.fill(0)

    dp[0] = 1
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }
    return dp[n]
};

const n = 3

console.log(numTrees(n))