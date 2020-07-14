/*
有點像 coin sum，如果順序不重要，可以用選擇要不要用來縮小 problem size
*/

var combinationSum = function(candidates, target) {
    let list = []

    const choose = (nums, used, target) => {
        if (nums.length === 0) {return}
        if (target < 0) {return}
        if (target === 0) {
            list.push([...used])
            return
        }

        let temp = [...nums]
        let x = nums.pop()
        choose(nums, used, target)

        // 做選擇
        used.push(x)
        choose(temp, used, target - x)
        // 取消選擇
        used.pop()
    }

    choose(candidates, [], target)
    return list
};

const candidates = [2,3,6,7]
const target = 7

console.log(combinationSum(candidates, target))

