/*
Time Complexity: O(n)
Space Complexity: O(H) => 如果 nums 本身是遞增或遞減排列的話，Tree 會變成 Linked list，H 就會等於 n
*/

var constructMaximumBinaryTree = function(nums) {
    
    const construct = (left, right) => {
        if (left > right) {return null}
        if (left === right) {return new TreeNode(nums[left])}

        const subArr = nums.slice(left, right + 1)
        let index = nums.indexOf(Math.max(...subArr))

        const node = new TreeNode(nums[index])
        node.left = construct(left, index - 1)
        node.right = construct(index + 1, right)

        return node
    }

    return construct(0, nums.length - 1)
};

const nums = [3,2,1,6,0,5]

console.log(constructMaximumBinaryTree(nums))

/* 
修改一下搜尋最大值的方法
Time Complexity 從 35% 優化到 97%
*/

var constructMaximumBinaryTree = function(nums) {
    
    const construct = (left, right) => {
        if (left > right) {return null}
        if (left === right) {return new TreeNode(nums[left])}

        let max = [left, nums[left]]

        for (let i = left + 1; i <= right; i++) {
            if (max[1] < nums[i]) {max = [i, nums[i]]}
        }

        const node = new TreeNode(nums[max[0]])
        node.left = construct(left, max[0] - 1)
        node.right = construct(max[0] + 1, right)

        return node
    }

    return construct(0, nums.length - 1)
};
