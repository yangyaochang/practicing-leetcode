/*
Transpose 轉置
*/

var transpose = function(A) {
    const list = []
    
    for (let i = 0; i < A[0].length; i++) {
        let row = new Array(A.length)
        list.push(row)
    }
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            list[j][i] = A[i][j]
        }
    }
    
    return list
};