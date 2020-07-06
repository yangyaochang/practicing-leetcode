var sortArrayByParity = function(A) {
    let cache = {
        odd: [],
        even: []
    }
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {cache.even.push(A[i])}
        else {cache.odd.push(A[i])}
    }
    
    return cache.even.concat(cache.odd)
};