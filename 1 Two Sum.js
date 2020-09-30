// Time complexity O(n^2) soluion
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                if (i === j) {
                    continue
                } else {
                    return [i, j]
                }
            }
        }
    }
};

// Time complexity O(n) solution
var twoSum = function(nums, target) {
    let numObj = {}
    for (let i = 0; i < nums.length; i++) {
        numObj[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        if (numObj[target - nums[i]]) {
            if (i === numObj[target - nums[i]]) {
                continue
            } else {
                return [i, numObj[target - nums[i]]]
            }
            
        }
    }
};

// The best solution
var twoSum = function(nums, target) {
    let numObj = {}
    for (let i = 0; i < nums.length; i++) {
        // Call hasOwnProperty to check if the obj has a specific propety
        if (numObj.hasOwnProperty(target - nums[i])) {
            if (numObj[target - nums[i]] !== i) {
                return [numObj[target - nums[i]], i]
            }
        } else {
            numObj[nums[i]] = i
        }
    }
};

// 第二次做

var twoSum = function(nums, target) {
    const cache = {}

    for (let i = 0; i < nums.length; i++) {
        const num2 = target - nums[i]
        if (num2 in cache) {return [i, cache[num2]]}
        else {cache[nums[i]] = i}
    }
};

// 第三次做

var twoSum = function(nums, target) {
    const cache = {}

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in cache) {return [cache[target - nums[i]], i]}
        else {cache[nums[i]] = i}
    }
}