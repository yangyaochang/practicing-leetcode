var removeInterval = function(intervals, toBeRemoved) {
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] <= toBeRemoved[1] && intervals[i][1] > toBeRemoved[0]) {
            if (intervals[i][0] < toBeRemoved[0]) {
                intervals[i][1] = toBeRemoved[0]
            } else if (intervals[i][0] >= toBeRemoved[0]) {
                intervals.splice(i, 1)
                i--
            }
        } else if (intervals[i][1] > toBeRemoved[1] && intervals[i][0] < toBeRemoved[1]) {
            if (intervals[i][0] >= toBeRemoved[0]) {
                intervals[i][0] = toBeRemoved[1]
            } else {
                let temp = intervals[i][1]
                intervals[i][1] = toBeRemoved[0]
                intervals.splice(i + 1, 0, [toBeRemoved[1], temp])
            }
        }
    }
    return intervals
};

const intervals = [[-5,-4],[-3,-2],[1,2],[3,5],[8,9]]
const toBeRemoved = [-1,4]

console.log(removeInterval(intervals, toBeRemoved))