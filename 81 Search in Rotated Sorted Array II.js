var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    // nums[left] >= nums[right] 扣除整個 array 都是同一個元素的情況就是 rotated
    while (nums[left] >= nums[right]) {
        while (nums[left] === nums[right]) {
            if (left === right) {return nums[left] === target}
            // 檢查若是整個 array 都是同一個元素的話 是否有找到
            left++
        }
        
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[left]) {
            if (nums[mid] >= target && target >= nums[left]) {
                return binarySearch(left, mid)
            } else {
                left = mid + 1
            }
        } else if (nums[left] > nums[mid]) {
            if (nums[right] >= target && target >= nums[mid]) {
                return binarySearch(mid, right)
            } else {
                right = mid - 1
            }
        } else if (nums[mid] === nums[left]) {
            if (nums[left] === target) {return true}
            else {left = mid + 1}
        }
    }

    return binarySearch(left, right)

    function binarySearch(left, right) {
        while (left <= right) {
            const m = Math.floor((left + right) / 2)

            if (nums[m] === target) {return true} 
            else if (target > nums[m]) {left = m + 1}
            else if (nums[m] > target) {right = m - 1}
        }
        return false
    }
};