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

/*
兩次做法在判斷 matrix 小於某一個數的個數有多少的方法略微不同，也導致最後一個是返回左邊界，一個是返回右邊界。所以重點在於邏輯要一致
*/

var kthSmallest = function(matrix, k) {
    let left = matrix[0][0]
    let right = matrix[matrix.length - 1][matrix[0].length - 1]

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (numOfValuesSmaller(mid) < k) {left = mid + 1}
        else if (numOfValuesSmaller(mid) >= k) {right = mid - 1}
    }

    return left

    function numOfValuesSmaller(value) {
        let num = 0
        let numInCol = matrix.length
        let row = matrix.length - 1
        let col = 0

        while (row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length) {
            if (value >= matrix[row][col]) {
                col++
                num += numInCol
            } else if (value < matrix[row][col]) {
                row--
                numInCol--
            }
        }
        return num
    }
}

const matrix = [[ 1,  5,  9],
                [10, 11, 13],
                [12, 13, 15]]
const k = 8

console.log(kthSmallest(matrix, k))