/*
Find maximum height of bar from the left end upto an index i in the array.
leftMax, rightMax 初始均為 0

找左邊與右邊的最大值，可以儲存的雨水為左右邊最大值中的較小值減去自己的高

Time Complexity: O(n)
Space Complexity: O(n)
*/

var trap = function(height) {
    const leftMax = []
    const rightMax = []
    let maxToLeft = 0
    let maxToRight = 0
    let trappedRain = 0

    for (let i = 0; i < height.length; i++) {
        leftMax.push(maxToLeft)
        maxToLeft = Math.max(maxToLeft, height[i])
    }

    for (let i = height.length - 1; i >= 0; i--) {
        rightMax.push(maxToRight)
        maxToRight = Math.max(maxToRight, height[i])
    }
    rightMax.reverse()

    height.forEach((h, i) => {
        trappedRain += Math.max(0, Math.min(leftMax[i], rightMax[i]) - h)
    })

    return trappedRain
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(height))

// 第二次做

var trap = function(height) {
    const left = []
    const right = []

    for (let i = 0; i < height.length; i++) {
        if (i === 0) {
            left.push(0)
        } else {
            left.push(Math.max(left[left.length - 1], height[i - 1]))
        }
        if (height.length - 1 - i === height.length - 1) {
            right.push(0)
        } else {
            right.push(Math.max(right[right.length - 1], height[height.length - i]))
        }
    }

    console.log(left, right)
    right.reverse()
    let trappedRain = 0

    for (let i = 0; i < height.length; i++) {
        if (Math.min(left[i], right[i]) - height[i] > 0) {
            trappedRain += Math.min(left[i], right[i]) - height[i]
        }
    }
    return trappedRain
}

const height = [2,0,2]

console.log(trap(height))