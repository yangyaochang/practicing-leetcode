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