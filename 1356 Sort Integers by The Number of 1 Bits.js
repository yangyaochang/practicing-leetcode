var sortByBits = function(arr) {
    arr = quicksort(arr)

    return arr

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (count1s(arr[i]) < count1s(arr[e])) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                } else if (count1s(arr[i]) === count1s(arr[e])) {
                    if (arr[i] < arr[e]) {
                        [arr[i], arr[m]] = [arr[m], arr[i]]
                        m++
                    }
                }
            }
            [arr[m], arr[e]] = [arr[e], arr[m]]
            divide(s, m - 1)
            divide(m + 1, e)
        }
        divide(0, arr.length - 1)
        return arr
    }
    
    function count1s(num) {
        let binary = num.toString(2)
        let count = 0

        for (let i = 0; i < binary.length; i++) {
            if (binary[i] === '1') {count++}
        }
        return count
    }
};

const arr = [0,1,2,3,4,5,6,7,8]

console.log(sortByBits(arr))

