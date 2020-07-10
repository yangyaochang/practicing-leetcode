/*
capacity 最小是最重的貨品，最大是所有貨物的總重，在這之間作二分搜尋尋找最左邊界 (最小的 capacity)
*/

var shipWithinDays = function(weights, D) {
    let left = Math.max(...weights)
    let right = 0
    let mid

    for (let i = 0; i < weights.length; i++) {
        right += weights[i]
    }

    while (left <= right) {
        mid = Math.floor((left + right) / 2)

        if (countDays(weights, mid) === D) {right = mid - 1} 
        else if (countDays(weights, mid) > D) {left = mid + 1}
        else if (countDays(weights, mid) < D) {right = mid - 1}
    }

    return left
    
    function countDays(weights, capacity) {
        let sum = 0
        let index = 0
        let days = 1

        while (index < weights.length) {
            if (sum + weights[index] <= capacity) {
                sum += weights[index]
                index++
            } else {
                sum = 0
                days++
            }
        }
        return days
    }
};

const weights = [1,2,3,1,1]
const D = 4

console.log(shipWithinDays(weights, D))