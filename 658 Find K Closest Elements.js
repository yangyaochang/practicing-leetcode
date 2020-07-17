/*
Time Complexity: O(logn + k) => 不同的 input 要用不同的變數表示，不能直接化簡掉
Space Complexity: O(k) => 用到 slice() shallow copy
*/

var findClosestElements = function(arr, k, x) {
    if (x < arr[0]) {return arr.slice(0, k)}
    if (x > arr[arr.length - 1]) {return arr.slice(arr.length - k, arr.length)}
    
    let left = binarySearch(arr, x)
    let right = left
    console.log(left)
    k--
    
    // 一次找一個距離最近的
    while (k > 0 && left > 0 && right < arr.length - 1) {
        if (x - arr[left - 1] <= arr[right + 1] - x) {
            left--
            k--
        } else if (x - arr[left - 1] > arr[right + 1] - x) {
            right++
            k--
        }
    }

    // 若 left 或 right 有一個出界但還沒找完
    if (k !== 0) {
        if (left === 0) {
            while (k > 0) {
                right++
                k--
            }
        } else if (right === arr.length - 1) {
            while (k > 0) {
                left--
                k--
            }
        }
    }

    return arr.slice(left, right + 1)
    
    function binarySearch(arr, target) {
        let left = 0
        let right = arr.length - 1
        let mid

        while (left <= right) {
            mid = Math.floor((left + right) / 2)

            if (arr[mid] === target) {return mid}
            else if (arr[mid] < target) {left = mid + 1}
            else if (arr[mid] > target) {right = mid - 1}
        }
        // 若沒找到返回距離較近的
        return (target - arr[right] > arr[left] - target) ? left : right
    }
};

const arr = [0,1,1,1,2,3,6,7,8,9]
const k = 9
const x = 4

console.log(findClosestElements(arr, k, x))