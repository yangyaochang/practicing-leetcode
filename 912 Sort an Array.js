var sortArray = function(nums) {
    if (nums.length === 1) {return nums}

    const mid = Math.floor(nums.length / 2)

    const left = nums.slice(0, mid)
    const right = nums.slice(mid, nums.length)

    return merge(sortArray(left), sortArray(right))

    function merge(arr1, arr2) {
        if (!arr1) {return arr2}
        if (!arr2) {return arr1}

        let p1 = 0
        let p2 = 0
        let list = []

        while (arr1[p1] !== undefined && arr2[p2] !== undefined) {
        // 有值為 0 時如果用 arr[p] 會得到 false

            if (arr1[p1] <= arr2[p2]) {
                list.push(arr1[p1])
                p1++
            } else if (arr1[p1] > arr2[p2]){
                list.push(arr2[p2])
                p2++
            }
        }

        if (p1 < arr1.length) {
            list = list.concat(arr1.slice(p1))
        } else if (p2 < arr2.length) {
            list = list.concat(arr2.slice(p2))
        }

        return list
    }
};

const nums = [5,1,1,2,0,0]

console.log(sortArray(nums))