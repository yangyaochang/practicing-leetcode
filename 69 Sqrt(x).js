/*
求平方根的個位數
x 的平方根 k 一定位於 0 ~ x 之間
k ^ 2 <= x (k 只包含整數部分) 也就是 k <= x ^ (1/ 2)
可以利用二分搜尋求在 [0, ..., x] 間搜尋 x ^ (1 / 2)
若平方根不是整數會找不到，k 是小於平方根的最大整數也就是二分搜尋找不到時 right 最後指向的值
*/

var mySqrt = function(x) {
    let left = 0
    let right = x

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (Math.pow(mid, 2) === x) {return mid}
        else if (Math.pow(mid, 2) > x) {right = mid - 1}
        else if (Math.pow(mid, 2) < x) {left = mid + 1}
    }

    return right
};

const x = 8

console.log(mySqrt(x))

// Binary Search 若 target 在搜索的 array 範圍內，但不存在於 array 裡，最後 right 會停在小於 target 的最大值，left 會停在大於 target 的最小值

var mySqrt = function(x) {
    let left = 0
    let right = x

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const square = Math.pow(mid, 2)

        if (square === x) {return mid}
        else if (square > x) {
            right = mid - 1
        } else if (square < x) {
            left = mid + 1
        }
    }

    return right
}