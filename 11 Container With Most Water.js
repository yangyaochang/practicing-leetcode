/*
兩個 vertical lines 之間可以裝的水是由比腳矮的 line 與兩個 lines 之間的距離決定的
從最兩側的 lines 開始比較，每次移動比較短的 line，比較每次移動後可以儲存的水量，只儲存最大值

Time Complexity: O(n)
Space Complexity: O(1)
*/

var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxAmount = 0

    while (left < right) {
        maxAmount = Math.max(maxAmount, amountOfWater(left, right))

        if (height[left] <= height[right]) {
        // 相等的時候移動哪一個 pointer 都沒有差
            left++
        } else if (height[left] > height[right]) {
            right--
        }
    }

    return maxAmount

    function amountOfWater(left, right) {
        return (right - left) * Math.min(height[left], height[right])
    }
};

const height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height))

// Brute Force

var maxArea = function(height) {
    let max = 0

    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * Math.abs(i - j))
        }
    }
    return max
}

// Slinding window

var maxArea = function(height) {
    let max = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        max = Math.max(max, containedWater(left, right))

        if (height[left] < height[right]) {
            left++
        } else if (height[left] >= height[right]) {
            right--
        }
    }

    return max

    function containedWater(left, right) {
        return Math.min(height[left], height[right]) * (right - left)
    }
}
