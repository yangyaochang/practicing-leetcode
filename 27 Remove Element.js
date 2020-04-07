// Solution 1
var removeElement_sol1 = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1]
            }
            nums.pop()
            i--
        }
    }
    return nums.length
};

//Solution 2
var removeElement_sol2 = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            if (i !== nums.length - 1) {
                nums[i] = nums.pop()
                i--
            } else if (i === nums.length - 1) {
                nums.pop()
            }
            
        }
    }
    return nums.length
};