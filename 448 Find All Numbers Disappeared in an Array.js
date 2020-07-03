var findDisappearedNumbers = function(nums) {
    let numsShouldAppear = new Map()
    let list = []

    for (let i = 0; i < nums.length; i++) {
        numsShouldAppear.set(i + 1, 1)
    }

    for (let i = 0; i < nums.length; i++) {
        if (numsShouldAppear.has(nums[i])) {
            numsShouldAppear.delete(nums[i])
        }
    }

    for (let key of numsShouldAppear.keys()) {
        list.push(key)
    }

    return list
};

/*
如果沒有 missing，array 經過排序後應該是在 index = i 的值是 i + 1
所以可以透過 arr[arr[i] - 1] 的關係找到經過排序後會在的位置，另用 * (-1) mark 起來
最後以值大於 1 來找到 missing number (會是 index + 1)
*/

var findDisappearedNumbers = function(nums) {
    let list = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] *= -1
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {list.push(i + 1)}
    }

    return list
};

const nums = [4,3,2,7,8,2,3,1]

console.log(findDisappearedNumbers(nums))