var sortArrayByParityII = function(A) {
    let cache = {
        odd: [],
        even: []
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            cache.even.push(A[i])
        } else {
            cache.odd.push(A[i])
        }
    }

    for (let i = 0; i < A.length; i++) {
        if (i % 2 === 0) {
            A[i] = cache.even.pop()
        } else {
            A[i] = cache.odd.pop()
        }
    }

    return A
};

const A = [4,2,5,7]

console.log(sortArrayByParityII(A))