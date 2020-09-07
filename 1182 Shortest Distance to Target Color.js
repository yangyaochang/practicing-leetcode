var shortestDistanceColor = function(colors, queries) {
    const list = []

    for (let i = 0; i < queries.length; i++) {
        let left = queries[i][0]
        let right = queries[i][0]

        while (left >= 0 || right < colors.length) {
            if (colors[left] === queries[i][1]) {
                list.push(queries[i][0] - left)
                break
            }
            if (colors[right] === queries[i][1]) {
                list.push(right - queries[i][0])
                break
            }
            if (left === 0 && right === colors.length - 1) {
                list.push(-1)
                break
            }
            if (left > 0) {left--}
            if (right < colors.length - 1) {right++}
        }
    }
    return list   
};

const colors = [1,2]
const queries = [[0,3]]

console.log(shortestDistanceColor(colors, queries))