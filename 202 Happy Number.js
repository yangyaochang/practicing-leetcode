var isHappy = function(n) {
    const cache = new Set()

    const replace = (n) => {
        if (n === 1) {return true}
        if (cache.has(n)) {return false}
        
        cache.add(n)
        // 進到下一輪再把 n 加到 cache

        const digits = n.toString().split('').map(d => Number(d))
        let num = 0
        digits.forEach(d => {num += d * d})
        return replace(num)
    }

    return replace(n)
}

const n = 2

console.log(isHappy(n))