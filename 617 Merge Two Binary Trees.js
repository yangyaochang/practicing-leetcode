// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

  // DO NOT EDIT
  // generate tree from array
function deserialize(arr) {
    if (arr.length === 0) { return null; }
    let root = new TreeNode(arr[0]);
    let queue = [root];
    for(let i = 1; i < arr.length; i += 2) {
        let current = queue.shift();
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
            current.right = new TreeNode(arr[i + 1]);
            queue.push(current.right);
        }
    }
    return root;
}

/*
如果有其中一個 current node 為 null，直接返回另一棵樹的 current node，不用繼續再 traverse，直接接上接下來所有的 node
*/

var mergeTrees = function(t1, t2) {
    const merge = (current1, current2) => {
        if (current1 === null && current2 === null) {return null}
        if (current1 === null) {return current2}
        if (current2 === null) {return current1}

        let value = current1.value + current2.value

        let newNode = new TreeNode(value, merge(current1.left, current2.left), merge(current1.right, current2.right))
        return newNode
    }

    return merge(t1, t2)
};

const arr1 = [1,3,4,5,null,null,null]
const arr2 = [2,1,3,null,4,null,7]
const sampleTree1 = deserialize(arr1)
const sampleTree2 = deserialize(arr2)
console.log(mergeTrees(sampleTree1, sampleTree2))