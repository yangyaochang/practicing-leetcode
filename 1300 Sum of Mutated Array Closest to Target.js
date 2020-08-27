/*
用 Binary Search 查找可能的範圍，value 可能的值介於 arr 中的最大值與 0 之間。
我假設 target >= 0 所以 value 不會找到負的，但題目沒有這樣說，我也不確定這樣的假設是否多餘 
*/

var findBestValue = function(arr, target) {
    let right = -Infinity

    for (let i = 0; i < arr.length; i++) {
        right = Math.max(right, arr[i])
    }

    let left = 0
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= mid) {sum += mid}
            else {sum += arr[i]}
        }

        if (sum === target) {return mid}
        else if (sum < target) {left = mid + 1}
        else if (sum > target) {right = mid - 1}
    }

    let leftSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= left) {leftSum += left}
        else {leftSum += arr[i]}
    }
    let rightSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= right) {rightSum += right}
        else {rightSum += arr[i]}
    }

    return (Math.abs(target - leftSum) >= Math.abs(target - rightSum)) ? right : left
};

const arr = [4,9,3]
const target = 10

console.log(findBestValue(arr, target))