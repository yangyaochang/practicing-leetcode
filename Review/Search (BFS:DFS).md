## 17. Letter Combinations of a Phone Number

## 78. Subsets

可以用球組合的解法
也可以用二分法
p(n) = p(n - 1) + n Time Complexity: O(2 ^ n)

## 267. Palindrome Permutation II

先分辨這個 string 有沒有可能組成 palindrome，如果超過一個字母出現奇數次，就不可能

接著只排列出現偶數次的字母，並且只排列一半，接著再將出現奇數次的字母加上去後 (若有)，再接上鏡射的那一半

## 698. Partition to K Equal Sum Subsets
## 416. Partition Equal Subset Sum

416, 698 都是屬於每次拿一個數，有 k 個位置可以放
遞減排序可以加快運算速度

## 93. Restore IP Addresses

698, 93 這類型的 backtracking 還不熟

698, 416 是取一個數選擇放到不同位置，93 是選不同數 放到同一個位置

## 131. Palindrome Partitioning
131, 93, 698, 416 跟排列組合不同的是，排列組合單純取值放入，但這些題目的共同點是要先取到 valid 的值才可以嘗試放入
131 => 要取 palindrome
93 => 要取 0 到 255
698 => 要加起來不超過平均