/*
每次把次方拆成一半只算一半，另用 memoization 優化演算法
對於次方為負的，也可以最後將結果變成倒數 return 1 / multiply(n)

Time Complexity: O(logn)
Space Complexity: O(logn)
*/

var myPow = function(x, n) {
    if (n === 0) {return 1}
    if (n < 0) {
        x = 1 / x
        n *= -1
    }

    const cache = {}

    const multiply = (power) => {
        if (power === 1) {return x}
        if (power in cache) {return cache[power]}

        if (power % 2 === 0) {
            cache[power] = multiply(power / 2) * multiply(power / 2)
            return cache[power]
        } else if (power % 2 === 1) {
            cache[power] = multiply((power - 1) / 2) * multiply((power + 1) / 2)
            return cache[power]
        }
    }

    return multiply(n)
};

const x = 2
const n = -2

console.log(myPow(x, n))