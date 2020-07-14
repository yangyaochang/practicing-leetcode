/*
key 用分隔線比較好
*/

var uniquePaths = function(m, n) {
    let cache = {}

    const move = (row, col) => {
        if (row >= n || col >= m) {return 0}
        if (row === n - 1 && col === m - 1) {return 1}

        let position = row + '_' + col
        if (position in cache) {return cache[position]}
        
        return cache[position] = move(row, col + 1) + move(row + 1, col)
    }

    return move(0, 0)
};

const m = 23
const n = 12

console.log(uniquePaths(m, n))
