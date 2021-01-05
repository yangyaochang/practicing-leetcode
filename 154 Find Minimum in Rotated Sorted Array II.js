/*
rotated sorted arry 至少可以確定有一半是 sorted，那一半可以用 binary search 找 target 或最小值為第一個元素
但如果有 duplicates 就無法確定哪一半是 sorted

e.g.
[2,2,2,2,2,2,2,2,2]
[2,2,2,2,2,2,3,1,2]
第一個和最後一個元素和 mid 都是一樣的

透過不斷拆成兩半直到只剩下一個或最後一個元素得到最小值

Time Complexity: O(n) => 其實跟線性搜索一樣，跟沒有 duplicates 的 rotated sorted array 不一樣是因為沒有 duplicates 只需要看另外一半，case 變少
Space Complexity: O(n)
*/

var findMin = function(nums) {
    
    const divide = (left, right) => {
        if (left === right) {return nums[left]}
        if (right - left === 1) {return Math.min(nums[left], nums[right])}

        let mid = Math.floor((left + right) / 2)

        return Math.min(divide(left, mid), divide(mid + 1, right))
    }

    return divide(0, nums.length - 1)
};

// 用 iteration 作法

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (nums[left] >= nums[right]) {
        while (nums[left] === nums[right]) {
            if (left === right) {return nums[left]}
            left++
        }
        
        if (nums[left] < nums[right]) {break}

        const mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[left]) {left = mid + 1}
        else if (nums[mid] < nums[left]) {right = mid}
        else if (nums[mid] === nums[left]) {left = mid + 1} 
    }

    return nums[left]
};

const nums = [2,2,2,0,1]

console.log(findMin(nums))

// 第三次做

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (nums[left] >= nums[right]) {
        while (nums[left] === nums[right]) {
            left++
            if (left === right) {return nums[left]}
        }

        if (nums[left] < nums[right]) {return nums[left]}

        const mid = Math.floor((left + right) / 2)

        if (nums[mid] >= nums[left]) {
            left = mid + 1
        } else if (nums[right] >= nums[mid]) {
            right = mid
        }
    }
    return nums[left]
}

const nums = [1,3,5]

console.log(findMin(nums))

// 第四次做

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (nums[left] >= nums[right]) {
        while (nums[left] === nums[right]) {
            if (left === right) {return nums[left]}
            left++
        }

        if (nums[right] >= nums[left]) {return nums[left]}
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] >= nums[left]) {
            left = mid + 1
        } else if (nums[right] >= nums[mid]) {
            right = mid
        }
    }

    return nums[left]
}

// Worst case scenario: 整個 array 都是一樣的值，那麼 while loop 會走完，Time Complexity 為 O(n)

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1

    while (nums[left] >= nums[right]) {
        while (nums[left] === nums[right]) {
            if (left === right) {return nums[left]}
            left++
        }

        if (nums[right] > nums[left]) {return nums[left]}
        const mid = Math.floor((left + right) / 2)

        if (nums[left] <= nums[mid]) {
            left = mid + 1
        } else if (nums[right] >= nums[mid]) {
            right = mid
        }
    }

    return nums[left]
}   
