var peakIndexInMountainArray = function(A) {
    let start = 0
    let end = A.length - 1
    let mid 

    while(start < end) {
        mid = Math.floor((start + end) / 2)
        if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) {
            return mid
        } else if (A[mid] < A[mid + 1] && A[mid] > A[mid - 1]) {
            start = mid + 1
        } else if (A[mid] > A[mid + 1] && A[mid] < A[mid - 1]) {
            end = mid - 1
        }
    } 
    return start
};

/*
Binary Search 解法

利用 mid 與 mid + 1 的大小判斷 peak 會在左半邊還是右半邊進而縮小搜索範圍
*/

var peakIndexInMountainArray = function(A) {
    let left = 0
    let right = A.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (A[mid] > A[mid + 1]) {right = mid}
        else if (A[mid] < A[mid + 1]) {left = mid + 1}
    }
    return left
};

const A = [0,1,0]

console.log(peakIndexInMountainArray(A))

var peakIndexInMountainArray = function(A) {
    let left = 0
    let right = A.length - 1

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if (A[mid] > A[mid + 1]) {
            right = mid
        } else if (A[mid] < A[mid + 1]) {
            left = mid + 1
        }
    }

    return left
}