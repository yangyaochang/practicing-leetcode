## 17. Letter Combinations of a Phone Number

## 78. Subsets

可以用球組合的解法
也可以用二分法
p(n) = p(n - 1) + n Time Complexity: O(2 ^ n)

## 267. Palindrome Permutation II

先分辨這個 string 有沒有可能組成 palindrome，如果超過一個字母出現奇數次，就不可能

接著只排列出現偶數次的字母，並且只排列一半，接著再將出現奇數次的字母加上去後 (若有)，再接上鏡射的那一半