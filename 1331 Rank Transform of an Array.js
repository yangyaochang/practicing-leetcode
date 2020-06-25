var arrayRankTransform = function(arr) {
    let sorted = quicksort([...arr])
    let rankList = {}
    let rank = 1

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] in rankList) {continue}
        else {
            rankList[sorted[i]] = rank
            rank++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = rankList[arr[i]]
    }

    return arr
    
    function quicksort(arr) {
        function divide(start, end) {
            if (start >= end) {return}

            let mid = start
            for (let i = start; i < end; i++) {
                if (arr[i] < arr[end]) {
                    [arr[i], arr[mid]] = [arr[mid], arr[i]]
                    mid++
                }
            }
            [arr[end], arr[mid]] = [arr[mid], arr[end]]

            divide(start, mid - 1)
            divide(mid + 1, end)
        }
        divide(0, arr.length - 1)
        return arr
    }
};

const arr = [40,10,20,30,20]

console.log(arrayRankTransform(arr))