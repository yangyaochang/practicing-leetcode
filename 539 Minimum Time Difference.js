/*
轉成分鐘來比較，時間是循環的所以要比 diff 與 1440 - diff
*/

var findMinDifference = function(timePoints) {
    let list = []
    let min = Infinity

    if (timePoints.length === 0) {return 0}

    for (let i = 0; i < timePoints.length; i++) {
        let time = timePoints[i].split(':').map(time => Number(time))
        list.push(time[0] * 60 + time[1])
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (i !== j) {
                let timeDiff = Math.abs(list[i] - list[j])
                min = Math.min(Math.min(timeDiff, 1440 - timeDiff), min)
            }
        }
    }

    return min
};

const timePoints = ["23:59","00:00"]

console.log(findMinDifference(timePoints))