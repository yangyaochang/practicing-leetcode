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

/*
下面的做法 private function 判斷的是 matrix 內小於或等於 target 的數字有幾個
所以當在做 Binary Search 的時候要找的是讓 "小於或等於 target 的數字 = k" 這個條件滿足的最左邊界
因為坐左邊界會剛好 "是存在於 matrix 裡的數" 且也滿足 "小於或等於 target 的數字 = k"
大於左邊界但不存在於 matrix 裡的數也可能滿足 "小於或等於 target 的數字 = k"
*/

var kthSmallest = function(matrix, k) {
    let left = matrix[0][0]
    let right = matrix[matrix.length - 1][matrix[0].length - 1]

    while (left <= right) {
        const target = Math.floor((left + right) / 2)
        const numOfValues = numOfValuesSmallerOrEqualThanTarget(target)

        if (numOfValues === k) {
            right = target - 1
        } else if (numOfValues > k) {
            right = target - 1
        } else if (numOfValues < k) {
            left = target + 1
        }
    }

    return left

    function numOfValuesSmallerOrEqualThanTarget(target) {
        let numInCol = matrix.length
        let num = 0
        let row = matrix.length - 1
        let col = 0

        while (row >= 0 && col < matrix[0].length) {
            if (target >= matrix[row][col]) {
                num += numInCol
                col++
            } else if (target < matrix[row][col]) {
                numInCol--
                row--
            }
        }
        return num
    }
}