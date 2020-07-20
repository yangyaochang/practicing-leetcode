/*
capacity 最小是最重的貨品，最大是所有貨物的總重，在這之間作二分搜尋尋找最左邊界 (最小的 capacity)

Time Complexity: O(nlogm)
Space Complexity: O(1)
*/

var shipWithinDays = function(weights, D) {
    let minCapacity = Math.max(...weights)
    let maxCapacity = 0

    weights.forEach(weight => {maxCapacity += weight})

    while (minCapacity <= maxCapacity) {
        let mid = Math.floor((minCapacity + maxCapacity) / 2)
        let days = countDays(weights, mid)

        if (days <= D) {
            maxCapacity = mid - 1
        } else if (days > D) {
            minCapacity = mid + 1
        }
    }

    return minCapacity

    function countDays(weights, capacity) {
        let load = 0
        let days = 0

        for (let i = 0; i < weights.length; i++) {
            if (load + weights[i] <= capacity) {
                load += weights[i]
            } else if (load + weights[i] > capacity) {
                load = weights[i]
                days++
            }
        }

        return days + 1
    }
};

const weights = [1,2,3,1,1]
const D = 4

console.log(shipWithinDays(weights, D))