var intervalIntersection = function(A, B) {
    A = quicksort(A.concat(B))
    let list = []
    let currentLargest = 0

    for (let i = 1; i < A.length; i++) {
        // 第二個數字小於就代表整個 interval 包含
        if (A[i][1] <= A[currentLargest][1]) {
            list.push([A[i][0], A[i][1]])
            continue
        } else if (A[i][0] <= A[currentLargest][1]) {
            // 只有第一個數字小於代表只有部份重疊
            list.push([A[i][0], A[currentLargest][1]])
        }
        currentLargest = i
        // 部份重疊與沒有重疊的時候 currentLargest 都要更新
    }

    return list

    function quicksort(arr) {
        const divide = (start, end) => {
            if (start >= end) {return}

            let mid = start
            for (let i = start; i < end; i++) {
                if (arr[i][0] < arr[end][0]) {
                    [arr[mid], arr[i]] = [arr[i], arr[mid]]
                    mid++
                }
            }
            [arr[mid], arr[end]] = [arr[end], arr[mid]]

            divide(start, mid - 1)
            divide(mid + 1, end)
        }

        divide(0, arr.length - 1)
        return arr
    }
};

const A = [[0,2],[5,10],[13,23],[24,25]]
const B = [[1,5],[8,12],[15,24],[25,26]]
console.log(intervalIntersection(A, B))