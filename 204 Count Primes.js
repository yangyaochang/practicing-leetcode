/*
Brute Force

如何判斷一個數 n 是否為質數，從 2 iterate 到 n - 1 看是否能被整除
計算從 i = 2 到 i = n - 1 有幾個質數

Reference: https://github.com/labuladong/fucking-algorithm/blob/master/%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E7%B3%BB%E5%88%97/%E6%89%93%E5%8D%B0%E7%B4%A0%E6%95%B0.md
*/

var countPrimes = function(n) {
    let count = 0

    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {count++}
    }

    return count

    function isPrime(n) {
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {return false}
        }
        return true
    }
};

/*
反過來建立一個 array
從 i = 2 檢查到 i = n - 1，將質數的倍數改成 isPrime[i] = false
最後計算 isPrime[i] 裡有幾個 true
*/

var countPrimes = function(n) {
    const isPrime = new Array(n).fill(true)
    let count = 0

    for (let i = 2; i < n; i++) {
        if (isPrime[i] === true) {
            for (let j = 2 * i; j < n; j += i) {
                isPrime[j] = false
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (isPrime[i] === true) {count++}
    }
    return count
};

