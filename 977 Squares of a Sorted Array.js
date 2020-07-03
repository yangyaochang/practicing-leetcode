/*
用兩個 pointers 將 array 拆成大於等於 0，跟小於 0 兩個部分
*/

var sortedSquares = function(A) {
    let p1 // <0
    let p2 // >= 0
    let list = []

    if (A[0] >= 0) {
        for (let i = 0; i < A.length; i++) {    
            A[i] = A[i] * A[i]
        }
        return A
    }

    if (A[A.length - 1] < 0) {
        A.reverse()
        for (let i = 0; i < A.length; i++) {    
            A[i] = A[i] * A[i]
        }
        return A
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i + 1] >= 0 && A[i] < 0) {
            p1 = i
            p2 = i + 1
            break
        } 
    }

    while (p1 >= 0 && p2 < A.length) {
        if (Math.abs(A[p1]) <= Math.abs(A[p2])) {
            list.push(A[p1] * A[p1])
            p1--
        } else if (Math.abs(A[p1]) > Math.abs(A[p2])) {
            list.push(A[p2] * A[p2])
            p2++
        }
    }

    if (p1 < 0) {
        while (p2 < A.length) {
            list.push(A[p2] * A[p2])
            p2++
        }
    } else if (p2 === A.length) {
        while (p1 >= 0) {
            list.push(A[p1] * A[p1])
            p1--
        }
    }

    return list
};

const A = [-4,-1,0,3,10]

console.log(sortedSquares(A))