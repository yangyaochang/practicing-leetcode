const intersection = (nums1, nums2) => {
    const arr1 = new Set(nums1)
    const arr2 = new Set(nums2)
    let result = []

    for (let value of arr1.values()) {
        if (arr2.has(value)) {
            result.push(value)
        }
    }
    return result
};

const nums1 = [1,2,2,1]
const nums2 = [2,2]
console.log(intersection(nums1, nums2))

// 第二次做

var intersection = function(nums1, nums2) {
    const list = []
    const seen = new Set()

    for (let i = 0; i < nums1.length; i++) {
        seen.add(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        if (seen.has(nums2[i])) {
            list.push(nums2[i])
            seen.delete(nums2[i])
        }
    }
    return list
}

const nums1 = [1,2,2,1]
const nums2 = [2,2]

console.log(intersection(nums1, nums2))