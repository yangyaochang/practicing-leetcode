var findDuplicates = function(nums) {
    nums = mergesort(nums)
    let list = []

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {list.push(nums[i])}
    }

    return list

    function mergesort(arr) {
        if (arr.length <= 1) {return arr}

        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid, arr.length)

        return merge(mergesort(left), mergesort(right))
    }

    function merge(arr1, arr2) {
        let p1 = 0
        let p2 = 0
        let merged = []

        while (arr1[p1] && arr2[p2]) {
            if (arr1[p1] <= arr2[p2]) {
                merged.push(arr1[p1])
                p1++
            } else {
                merged.push(arr2[p2])
                p2++
            }
        }

        if (p1 === arr1.length) {
            merged = merged.concat(arr2.slice(p2))
        } else if (p2 === arr2.length) {
            merged = merged.concat(arr1.slice(p1))
        }

        return merged
    }
};

const nums = [4,3,2,7,8,2,3,1]

console.log(findDuplicates(nums))