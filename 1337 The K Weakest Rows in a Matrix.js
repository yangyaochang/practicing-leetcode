/*
Time complexity: O(n log(mn))
*/

var kWeakestRows = function(mat, k) {
    let numOfZeros = []
    let index = []

    for (let i = 0; i < mat.length; i++) {
        numOfZeros.push(binarySearch(mat[i]))
        index.push(i)
    }

    index = quicksort(index)

    return index.slice(0, k)

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}
            let m = s
            for (let i = s; i < e; i++) {
                if (numOfZeros[arr[i]] > numOfZeros[arr[e]]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                } else if (numOfZeros[arr[i]] === numOfZeros[arr[e]]) {
                    if (arr[i] < arr[e]) {
                        [arr[i], arr[m]] = [arr[m], arr[i]]
                        m++
                    }
                }
            }
            [arr[e], arr[m]] = [arr[m], arr[e]]
            divide(s, m - 1)
            divide(m + 1, e)
        }
        divide(0, arr.length - 1)
        return arr
    }
    
    function binarySearch(arr) {
        let start = 0
        let end = arr.length - 1
        let mid

        if (arr[0] === 0) {return arr.length}
        if (arr[end] === 1) {return 0}

        while (start < end) {
            mid = Math.floor((start + end) / 2)
            if (arr[mid] === 0) {end = mid}
            else {start = mid + 1}
        }
        return arr.length - start
    }
};

const mat = [[1,1,0,0,0],
            [1,1,1,1,0],
            [1,0,0,0,0],
            [1,1,0,0,0],
            [1,1,1,1,1]]
const k = 3

console.log(kWeakestRows(mat, k))
