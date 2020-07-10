var fixedPoint = function(A) {
    let start = 0
    let end = A.length - 1
    let mid

    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (A[mid] === mid) {end = mid - 1}
        else if (A[mid] < mid) {start = mid + 1}
        else if (A[mid] > mid) {end = mid - 1}
    }
    if (start >= A.length || A[start] !== start) {return -1}
    return start
};

const A = [-10,-5,-2,0,4,5,6,7,8,9,10]

console.log(fixedPoint(A))