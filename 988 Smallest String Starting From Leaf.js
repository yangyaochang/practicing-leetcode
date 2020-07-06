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

var smallestFromLeaf = function(root) {
    let code = {
        0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l',
        12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x',
        24: 'y', 25: 'z'
    }
    let paths = []

    const postorder = (current, path) => {
        if (current === null) {return null}
        
        path += code[current.value]
        let left = postorder(current.left, path)
        let right = postorder(current.right, path)

        if (left === null && right === null) {
            paths.push(path.split('').reverse().join(''))
        }
    }
    
    postorder(root, '')
    paths.sort((a, b) => a.localeCompare(b))
    
    return paths[0]
};

const arr = [0,1,2,3,4,3,4]
const tree = deserialize(arr)

console.log(smallestFromLeaf(tree))