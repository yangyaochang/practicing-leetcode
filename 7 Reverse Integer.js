/*
開頭是 -
結尾有 0
超出 [-2 ^ 31, 2 ^ 31 - 1] 要返回 0
*/

var reverse = function(x) {
    let negative = x < 0

    if (x < 0) {
        x = x.toString().slice(1)
    } else if (x > 0) {
        x = x.toString()
    } else if (x === 0) {return x}

    x = x.split('')
    let end = x.length - 1

    while (x[end] === '0') {
        x.pop()
        end--
    }

    x.reverse()

    const reversed = (negative) ? -1 * Number(x.join('')) : Number(x.join(''))
    if (- Math.pow(2, 31) <= reversed && reversed <= Math.pow(2, 31) - 1) {return reversed}
    else {return 0}
}

const x = -123

console.log(reverse(x))