var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let list = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {break}
        else if (i > 0 && nums[i] === nums[i - 1]) {continue}
        twoSum(i + 1, i, nums.length - 1)
    }

    function twoSum(left, index, right) {
        while (left < right) {
            let sum = nums[left] + nums[index] + nums[right]
            if (sum < 0 || (nums[left] === nums[left - 1] && left > index + 1)) {left++}
            else if (sum > 0 || (nums[right] === nums[right + 1] && right < nums.length - 1)) {right--} 
            else {
                list.push([nums[left], nums[index], nums[right]])
                left++
                right--
            }
        }
    }

    return list
}