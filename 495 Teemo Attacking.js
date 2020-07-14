/*
Overlapping intervals
*/

var findPoisonedDuration = function(timeSeries, duration) {
    let sum = duration
    let end = timeSeries[0] + duration - 1

    if (timeSeries.length === 0) {return 0}

    for (let i = 1; i < timeSeries.length; i++) {
        if (timeSeries[i] + duration - 1 > end && timeSeries[i] <= end) {
            sum += timeSeries[i] + duration - 1 - end
        } else if (timeSeries[i] > end) {
            sum += duration
        }
        end = timeSeries[i] + duration - 1
    }
    return sum
};

const timeSeries = [1,4]
const duration = 2

console.log(findPoisonedDuration(timeSeries, duration))