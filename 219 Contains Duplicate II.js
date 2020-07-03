var containsNearbyDuplicate = function(nums, k) {
    let seen = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in seen === false) {
            seen[nums[i]] = [i]
        } else {
            seen[nums[i]].push(i)
        }
    }

    let keys = Object.keys(seen)

    for (let i = 0; i < keys.length; i++) {
        let index = seen[keys[i]]
        for (let j = 0; j < index.length - 1; j++) {
            if (index[j + 1] - index[j] <= k) {return true}
        }
    }
    return false
};

const nums = [1,2,3,1]
const k = 3

console.log(containsNearbyDuplicate(nums, k))