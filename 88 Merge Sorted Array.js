var merge = function(nums1, m, nums2, n) {
    let i_1 = 0
    let i_2 = 0
    let output = []
    
    while (i_1 < m || i_2 < n) {
        if (i_1 >= m) {
            for (let i = i_2; i < n; i++) {
                output.push(nums2[i])
            }
            break 
        } else if (i_2 >= n) {
            for (let i = i_1; i < m; i++) {
                output.push(nums1[i])
            }
            break 
        } else {
            let p_1 = nums1[i_1]
            let p_2 = nums2[i_2]
    
            if (p_1 < p_2) {
                output.push(p_1)
                i_1++
            } else {
                output.push(p_2)
                i_2++
            }
        }
    }
    return output
};

// 第二次做

var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let index = nums1.length - 1

    while (p1 >= 0 && p2 >= 0) {
        if (nums2[p2] > nums1[p1]) {
            nums1[index] = nums2[p2]
            p2--
            index--
        } else if (nums2[p2] <= nums1[p1]) {
            nums1[index] = nums1[p1]
            p1--
            index--
        }
    }

    while (p2 >= 0) {
        nums1[index] = nums2[p2]
        p2--
        index--
    }

    return nums1
}

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]      
const n = 3

console.log(merge(nums1, m, nums2, n))