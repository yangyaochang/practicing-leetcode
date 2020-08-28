var validMountainArray = function(A) {
    let index = 0
    
    if (A[index] >= A[index + 1] || A.length < 3) {return false}
    
    while (A[index] < A[index + 1]) {
        index++
    }
    if (index === A.length - 1) {return false}
    while (index < A.length - 1) {
        if (A[index] > A[index + 1]) {
            index++
        } else {
            return false
        }
    }
    return true
};