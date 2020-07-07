var integerReplacement = function(n) {
    let min = Infinity

    const replace = (num, count) => {
        if (num === 1) {
            min = Math.min(min, count)
            return
        }

        if (num % 2 === 1) {
            replace(num + 1, count + 1)
            replace(num - 1, count + 1)
        } else {
            replace(num / 2, count + 1)
        }
    }

    replace(n, 0)
    return min
};

const n = 8

console.log(integerReplacement(n))