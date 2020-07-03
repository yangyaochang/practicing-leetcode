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