/*
Time Complexity: O(log(min(m, n)))
Space Complexity: O(1)
*/

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        let temp = nums1
        nums1 = nums2
        nums2 = temp
    }
    // 操作短的比較省時

    let left = 0
    let right = nums1.length - 1
    const k = Math.floor((nums1.length + nums2.length + 1) / 2)
    let mid1
    let mid2

    while (left <= right) {
        mid1 = Math.floor((left + right) / 2)
        mid2 = k - mid1

        if (nums1[mid1] < nums2[mid2 - 1]) {left = mid1 + 1}
        else if (nums1[mid1] >= nums2[mid2 - 1]) {right = mid1 - 1}
        // 找尋讓 mid1 >= mid2 - 1 的最左邊界
    }

    // 記得為 mid1, mid2 賦值
    mid1 = left
    mid2 = k - mid1

    let value1
    if (mid1 <= 0) {value1 = nums2[mid2 - 1]}
    else if (mid2 <= 0) {value1 = nums1[mid1 - 1]}
    else {value1 = Math.max(nums1[mid1 - 1], nums2[mid2 - 1])}

    if ((nums1.length + nums2.length) % 2 === 1) {return value1}

    let value2
    if (mid1 >= nums1.length) {value2 = nums2[mid2]}
    else if (mid2 >= nums2.length) {value2 = nums1[mid1]}
    else {value2 = Math.min(nums1[mid1], nums2[mid2])}

    
    return (value1 + value2) / 2
}

const nums1 = [1,2] 
const nums2 = [3,4]

console.log(findMedianSortedArrays(nums1, nums2))

