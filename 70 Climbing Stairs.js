var climbStairs = function(n) {
    let cache = {}
    const climb = (level) => {
        if (level === 0) {return 1}
        if (level < 0) {return 0}
        if (cache[level]) {return cache[level]}

        let paths = climb(level - 1) + climb(level - 2)
        if (!cache[level]) {cache[level] = paths}
        return paths
    } 

    return climb(n)
}

const n = 3
console.log(climbStairs(n))