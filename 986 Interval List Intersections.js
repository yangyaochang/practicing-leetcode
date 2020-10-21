/*
用 two pointers
先判斷 index 為 0 的數有沒有在另一對的區間裡
再判斷誰 index 為 1 的數比較小
合併區間，並移動 index 為 1 的數較小的那個 pointer
*/

var intervalIntersection = function(A, B) {
    const list = []
    let p1 = 0
    let p2 = 0

    while (p1 < A.length && p2 < B.length) {
        if (A[p1][1] >= B[p2][0] && B[p2][0] >= A[p1][0]) {
            if (A[p1][1] >= B[p2][1]) {
                list.push([B[p2][0], B[p2][1]])
                p2++
            } else {
                list.push([B[p2][0], A[p1][1]])
                p1++
            }
        } else if (A[p1][0] <= B[p2][1] && A[p1][0] >= B[p2][0]) {
            if (A[p1][1] >= B[p2][1]) {
                list.push([A[p1][0], B[p2][1]])
                p2++
            } else {
                list.push([A[p1][0], A[p1][1]])
                p1++
            }
        } else if (A[p1][0] > B[p2][1]) {
            p2++
        } else if (B[p2][0] > A[p1][1]) {
            p1++
        }
    }

    return list
}

/*
為什麼一開始要 sort？
最簡單的方法試試用暴力法，將每一個 interval 與剩下的 interval 都比較一遍找出所有的重疊區域，但這樣會重複比較。
透過排序我可以確定檔下一個 interval 的最小值大於目前 interval 的最大值的話，之後的 intervals 都與目前的 interval 
不可能有重疊部分。
*/

var intervalIntersection = function(A, B) {
    A = quicksort(A.concat(B))
    let list = []
    let currentLargest = 0

    for (let i = 1; i < A.length; i++) {
        // 第二個數字小於就代表整個 interval 包含
        if (A[i][1] <= A[currentLargest][1]) {
            list.push(A[i])
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

// 第二次做

var intervalIntersection = function(A, B) {
    A = quicksort(A.concat(B))
    const list = []
    if (A.length === 0) {return list}
    let maxEnd = A[0][1]

    for (let i = 1; i < A.length; i++) {
        // 整個 interval 重疊，maxEnd 不變，比下一個
        if (A[i][1] <= maxEnd) {
            list.push(A[i])
            continue
        } else if (A[i][0] <= maxEnd) {
        // 只有部份重疊
            list.push([A[i][0], maxEnd])
        }
        // 部份重疊與不重疊都要更新 maxEnd
        maxEnd = A[i][1]
    }

    return list

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i][0] < arr[e][0]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                }
            }
            [arr[e], arr[m]] = [arr[m], arr[e]]
            divide(s, m - 1)
            divide(m + 1, e)
        }

        divide(0, arr.length - 1)
        return arr
    }
};

const A = [[0,2],[5,10],[13,23],[24,25]]
const B = [[1,5],[8,12],[15,24],[25,26]]
console.log(intervalIntersection(A, B))