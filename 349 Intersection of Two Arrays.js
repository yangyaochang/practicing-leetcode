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