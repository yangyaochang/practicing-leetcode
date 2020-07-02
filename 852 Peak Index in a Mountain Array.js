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

const A = [0,1,0]

console.log(peakIndexInMountainArray(A))