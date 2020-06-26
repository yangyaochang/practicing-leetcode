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

var verticalOrder = function(root) {
    let columnTable = {}
    let minCol = Infinity
    let maxCol = -Infinity
    let list = []
    // 因為 quickosrt 用在 sort element 是 array 的 array，透過紀錄 column 的最大最小值來避免重寫一個 sort 來排序 columns
    
    // 以 column 為 key 建立一個 columnTable，value 是相同 column 的 [row, current.value]
    const inorder = (current, row, col) => {
        if (current === null) {return}

        inorder(current.left, row + 1, col - 1)
        if (col in columnTable) {
            columnTable[col].push([row, current.value])
        } else {
            columnTable[col] = [[row, current.value]]
            minCol = (col < minCol) ? col : minCol
            maxCol = (col > maxCol) ? col : maxCol
        }
        inorder(current.right, row + 1, col + 1)
    }

    // 接著根據 row 的大小 sort 每一個 key 的 value
    // 用 merge sort 才是 stable 保持同樣 row col 時由左到右
    const merge = (arr1, arr2) => {
        let p1 = 0
        let p2 = 0 
        let list = []

        while (arr1[p1] && arr2[p2]) {
            if (arr1[p1][0] <= arr2[p2][0]) {
                list.push(arr1[p1])
                p1++
            } else if (arr1[p1][0] > arr2[p2][0]){
                list.push(arr2[p2])
                p2++
            }
        }

        if (p1 === arr1.length) {
            list = list.concat(arr2.slice(p2))
        } else if (p2 === arr2.length) {
            list = list.concat(arr1.slice(p1))
        }

        return list
    }
    
    const mergesort = (arr) => {
        if (arr.length <= 1) {return arr}

        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid, arr.length)

        return merge(mergesort(left), mergesort(right))
    }

    inorder(root, 0, 0) 

    for (let i = minCol; i <= maxCol; i++) {
        if (i in columnTable) {
            columnTable[i] = mergesort(columnTable[i])
        }
        let valuesInSameCol = []
        for (let j = 0; j < columnTable[i].length; j++) {
            valuesInSameCol.push(columnTable[i][j][1])
        }
        list.push(valuesInSameCol)
    }
    
    return list
};

const arr = [-64,12,18,-4,-53,null,76,null,-51,null,null,-93,3,null,-31,47,null,3,53,-81,33,4,null,-51,-44,-60,11,null,null,null,null,78,null,-35,-64,26,-81,-31,27,60,74,null,null,8,-38,47,12,-24,null,-59,-49,-11,-51,67,null,null,null,null,null,null,null,-67,null,-37,-19,10,-55,72,null,null,null,-70,17,-4,null,null,null,null,null,null,null,3,80,44,-88,-91,null,48,-90,-30,null,null,90,-34,37,null,null,73,-38,-31,-85,-31,-96,null,null,-18,67,34,72,null,-17,-77,null,56,-65,-88,-53,null,null,null,-33,86,null,81,-42,null,null,98,-40,70,-26,24,null,null,null,null,92,72,-27,null,null,null,null,null,null,-67,null,null,null,null,null,null,null,-54,-66,-36,null,-72,null,null,43,null,null,null,-92,-1,-98,null,null,null,null,null,null,null,39,-84,null,null,null,null,null,null,null,null,null,null,null,null,null,-93,null,null,null,98]

const sampleTree = deserialize(arr)
console.log(verticalOrder(sampleTree))