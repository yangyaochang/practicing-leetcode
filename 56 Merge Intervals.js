var merge = function(intervals) {
    if (!intervals || intervals.length === 0) {return []}

    intervals = quicksort(intervals)
    const list = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= list[list.length - 1][1]) {
            list[list.length - 1][1] = Math.max(intervals[i][1], list[list.length - 1][1])
        } else {
            list.push(intervals[i])
        }
    }

    return list

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i][0] < arr[e][0]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                } else if (arr[i][0] === arr[e][0] && arr[i][1] < arr[e][1]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                }
            }
            [arr[e], arr[m]] = [arr[m], arr[e]]

            divide(s, m - 1)
            divide(m + 1, e)
        }
        divide(0, arr.length - 1)
        return arr
    }
};

