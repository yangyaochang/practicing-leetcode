// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/*
用兩個 pointers 在 array 中移動決定哪一個 mid 要被 insert
*/

var sortedArrayToBST = function(nums) {
    let root = null

    const build = (start, end) => {
        if (start > end) {return}

        let mid = Math.floor((start + end) / 2)
        if (root === null) {root = new TreeNode(nums[mid])}
        else {insert(nums[mid])}

        build(start, mid - 1)
        build(mid + 1, end)
    }

    build(0, nums.length - 1)
    return root
    
    function insert(value) {
        let newNode = new TreeNode(value)
        let current = root

        while (current) {
            if (value > current.value) {
                if (current.right) {
                    current = current.right
                } else {
                    current.right = newNode
                    return
                }
            } else if (value < current.value) {
                if (current.left) {
                    current = current.left
                } else {
                    current.left = newNode
                    return
                }
            }
        }
    }
};

/*
第二次做
Time Complexity: O(n)
Space Complexity: O(n) => 額外建立一個含有 n 個 nodes 的 tree
*/

var sortedArrayToBST = function(nums) {
    const convert = (left, right) => {
        if (left > right) {return null}
        if (left === right) {return new TreeNode(nums[left])}
        
        let mid = Math.floor((left + right) / 2)
        let newNode = new TreeNode(nums[mid])
        
        newNode.left = convert(left, mid - 1)
        newNode.right = convert(mid + 1, right)
        
        return newNode
    }
    
    return convert(0, nums.length - 1)
};

const arr = [0, 1, 2, 3, 4, 5]
console.log(sortedArrayToBST(arr))

// 注意會有 left > right 的狀況，此時要 return null

var sortedArrayToBST = function(nums) {
    
    const build = (left, right) => {
        if (left === right) {return new TreeNode(nums[left])}
        if (left > right) {return null}

        const mid = Math.floor((left + right) / 2)
        const node = new TreeNode(nums[mid])
        node.left = build(left, mid - 1)
        node.right = build(mid + 1, right)

        return node
    }
    return build(0, nums.length - 1)
};

var sortedArrayToBST = function(nums) {

    const convert = (left, right) => {
        if (left > right) {return null}
        if (left === right) {return new TreeNode(nums[left])}

        const mid = Math.floor((left + right) / 2)

        const node = new TreeNode(nums[mid])
        node.left = convert(left, mid - 1)
        node.right = convert(mid + 1, right)
        return node
    }

    return convert(0, nums.length - 1)
}

