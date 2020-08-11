/*
capacity 最小是最重的貨品，最大是所有貨物的總重，在這之間作二分搜尋尋找最左邊界 (最小的 capacity)

Time Complexity: O(nlogm) => 每拆分一半後都要 iteration 一次求 days
Space Complexity: O(1)
*/

var shipWithinDays = function(weights, D) {
    let capacityMin = Math.max(...weights)
    let capacityMax = 0
    
    weights.forEach(w => capacityMax += w)
    
    while (capacityMin <= capacityMax) {
        const mid = Math.floor((capacityMin + capacityMax) / 2)

        if (countDays(mid) > D) {capacityMin = mid + 1}
        else if (countDays(mid) <= D) {capacityMax = mid - 1}
    }
    
    return capacityMin
    
    function countDays(capacity) {
        let sum = 0
        let days = 0
        let index = 0

        while (index < weights.length) {
            sum += weights[index]
            if (sum > capacity) {
                sum = 0
                days++
            } else {
                index++
            }
        }
        return days + 1
    }
}

const weights = [1,2,3,1,1]
const D = 4

console.log(shipWithinDays(weights, D))