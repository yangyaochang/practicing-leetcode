const { lightblue } = require("color-name");

var pivotIndex = function(nums) {
    let leftSum = [0]
    let rightSum = [0]

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum.push(nums[i] + leftSum[i])
    }
    for (let i = 0; i < nums.length - 1; i++) {
        rightSum.push(nums[nums.length - 1 - i] + rightSum[i])
    }
    rightSum.reverse()

    for (let i = 0; i < nums.length; i++) {
        if (leftSum[i] === rightSum[i]) {return i}
    }
    return -1
};

const nums = [1,7,3,6,5,6]

console.log(pivotIndex(nums))