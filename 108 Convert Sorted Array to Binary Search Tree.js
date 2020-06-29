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

const arr = [0, 1, 2, 3, 4, 5]
console.log(sortedArrayToBST(arr))

