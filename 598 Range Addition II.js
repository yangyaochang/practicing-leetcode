var maxCount = function(m, n, ops) {
    let mostVisitedRow = Infinity
    let mostVisitedCol = Infinity

    ops.forEach(op => {
        mostVisitedRow = Math.min(mostVisitedRow, op[0])
        mostVisitedCol = Math.min(mostVisitedCol, op[1])
    })

    return (mostVisitedCol * mostVisitedRow === Infinity) ? m * n : mostVisitedCol * mostVisitedRow
};

const m = 3
const n = 3
const ops = [[2,2],[3,3]]

console.log(maxCount(m, n, ops))