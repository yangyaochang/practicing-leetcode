var smallerNumbersThanCurrent = function(nums) {
    let list = []

    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[j] < nums[i]) {
                count++
            }
        }
        list.push(count)
    }

    return list
};

const nums = [8,1,2,2,3]

console.log(smallerNumbersThanCurrent(nums))