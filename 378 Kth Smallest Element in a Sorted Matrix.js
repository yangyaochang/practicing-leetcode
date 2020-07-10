/*
小於 mid 的最右邊界
*/
var kthSmallest = function(matrix, k) {
    let smallest = matrix[0][0]
    let largest = matrix[matrix.length - 1][matrix[0].length - 1]
    let mid

    while (smallest <= largest) {
        mid = Math.floor((smallest + largest) / 2)
        let num = numSmallerThanTarget(matrix, mid)

        if (num < k) {
            smallest = mid + 1
        } else if (num > k) {
            largest = mid - 1
        } else if (num === k) {
            largest = mid - 1
        }
    }

    return largest

    function numSmallerThanTarget(matrix, target) {
        let value = matrix.length
        let num = 0
        let rowMax = matrix.length - 1
        let colMax = matrix[0].length - 1
        let row = rowMax
        let col = 0

        while (row >= 0 && row <= rowMax && col >= 0 && col <= colMax) {
            if (matrix[row][col] >= target) {
                row--
                value--
            } else if (matrix[row][col] < target) {
                col++
                num += value
            }
        }
        return num
    }
};

const matrix = [[ 1,  5,  9],
                [10, 11, 13],
                [12, 13, 15]]
const k = 8

console.log(kthSmallest(matrix, k))