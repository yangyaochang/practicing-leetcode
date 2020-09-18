/*
這題在問的是有幾個重複的
*/

var intersect = function(nums1, nums2) {
    let cache = {}
    let list = []

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] in cache) {
            cache[nums1[i]]++
        } else {
            cache[nums1[i]] = 1
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] in cache) {
            list.push(nums2[i])
            if (cache[nums2[i]] > 1) {
                cache[nums2[i]]--
            } else {
                delete cache[nums2[i]]
            }
        }
    }
    return list
};

const nums1 = [1,2,2,1]
const nums2 = [2,2]

console.log(intersect(nums1, nums2))

// 先排序後用兩個 pointers 去搜尋比對想法比較單純直觀

var intersect = function(nums1, nums2) {
    const quicksort = (arr) => {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i] < arr[e]) {
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

    nums1 = quicksort(nums1)
    nums2 = quicksort(nums2)
    let p1 = 0
    let p2 = 0
    const list = []

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            list.push(nums1[p1])
            p1++
            p2++
        } else if (nums1[p1] < nums2[p2]) {
            p1++
        } else if (nums1[p1] > nums2[p2]) {
            p2++
        }
    }
    return list
}

const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]

console.log(intersect(nums1, nums2))