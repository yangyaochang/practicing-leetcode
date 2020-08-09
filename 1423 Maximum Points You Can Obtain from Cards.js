// 用 DFS 窮舉各種頭尾相連的和，每一次都在選擇加最左邊還最右邊的值

var maxScore = function(cardPoints, k) {
    let maxSum = - Infinity

    const add = (sum, count, left, right) => {
        if (count === k) {
            maxSum = Math.max(maxSum, sum)
            return
        }

        add(sum + cardPoints[left], count + 1, left + 1, right)
        add(sum + cardPoints[right], count + 1, left, right - 1)
    }

    add(0, 0, 0, cardPoints.length - 1)
    return maxSum
};

// 用 Memoization 優化

var maxScore = function(cardPoints, k) {
    const cache = {}

    const add = (sum, count, left, right) => {
        const window = `${left}_${right}`
        if (count === k) {return sum}
        if (window in cache) {return cache[window]}

        cache[window] = Math.max(add(sum + cardPoints[left], count + 1, left + 1, right),
        add(sum + cardPoints[right], count + 1, left, right - 1))

        return cache[window]
    }
    
    return add(0, 0, 0, cardPoints.length - 1)
}

/* 
用 sliding window 計算連續和的最小值，總和 - 連續和的最小值及為解
Time Complexity: O(n)
Space Complexity: O(1)
*/

var maxScore = function(cardPoints, k) {
    let left = 0
    let right = 0
    let totalSum = 0
    let windowSum = 0

    cardPoints.forEach(point => {totalSum += point})
    

    while (right < cardPoints.length - k) {
        windowSum += cardPoints[right]
        right++
    }

    let notPickedSum = windowSum

    while (right < cardPoints.length) {
        windowSum += cardPoints[right] - cardPoints[left]
        notPickedSum = Math.min(notPickedSum, windowSum)
        right++
        left++
    }

    return totalSum - notPickedSum
};

const cardPoints = [1,2,3,4,5,6,1]
const k = 3

console.log(maxScore(cardPoints, k))

