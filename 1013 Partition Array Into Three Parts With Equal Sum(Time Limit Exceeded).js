var canThreePartsEqualSum = function(A) {
    let totalSum = 0
    
    for (let i = 0; i < A.length; i++) {
        totalSum += A[i]
    }
    
    const equalSum = totalSum / 3
    
    let p1 = 1
    
    while (p1 < A.length - 1) {
        for (let i = p1 + 1; i < A.length; i++) {
            let sum1 = 0
            let sum2 = 0
            let sum3 = 0
            for (let j = 0; j < p1; j++) {
                sum1 += A[j]
            }
            for (let j = p1; j < i; j++) {
                sum2 += A[j]
            }
            for (let j = i; j < A.length; j++) {
                sum3 += A[j]
            }
            if (sum1 === sum2 && sum2 === sum3) {return true}
        }
        p1++
    }
    return false
};