var deleteNode = function(root, key) {
    let current = root
    let parent = null

    if (root.val === key) {
        if (root.left === null) {return root.right}
        if (root.right === null) {return root.left}

        temp = root.left 
        while (temp.right !== null) {
            temp = temp.right
        }
        temp.right = root.right
        return root.left
    }

    while (current !== null) {
        if (current.val > key) {
            parent = current
            current = current.left
        } else if (current.val < key) {
            parent = current
            current = current.right
        } else if (current.val === key) {
            if (current.left === null && current.right === null) {
                if (key < parent.val) {
                    parent.left = null
                } else {
                    parent.right = null
                }
                return root
            }

            if (current.left === null) {
                if (key < parent.val) {
                    parent.left = current.right
                } else {
                    parent.right = current.right
                }
                return root
            }

            if (key < parent.val) {
                parent.left  = current.left
            } else {
                parent.right  = current.left
            }
            
            if (current.right === null) {return root}

            let temp = current.left 
            while (temp.right !== null) {
                temp = temp.right
            }
            temp.right = current.right
            return root
        }
    }
    return root
};

// 第二次作用 recursion 程式碼短很多，但 time complexity 變高

var deleteNode = function(root, key) {
    const dfs = (cur) => {
        if (cur === null) {return null}

        if (cur.val === key) {
            if (cur.left === null && cur.right === null) {return null}
            if (cur.left === null) {return cur.right}
            if (cur.right === null) {return cur.left}

            let current = cur.right
            while (current.left !== null) {
                current = current.left
            }
            current.left = cur.left
            return cur.right
        }
        
        cur.left = dfs(cur.left)
        cur.right = dfs(cur.right)
        return cur
    }

    return dfs(root)
};

// 先判斷在走訪，壓縮 time complexity

var deleteNode = function(root, key) {
    const dfs = (cur) => {
        if (cur === null) {return null}

        // 不需要 traverse 兩個 children，根據 key 的大小決定 traverse 的方向
        if (cur.val > key) {
            cur.left = dfs(cur.left)
        }
        if (cur.val < key) {
            cur.right = dfs(cur.right)
        }

        if (cur.val === key) {
            // 找到目標 node 之後重構 BST
            // 若 key 沒有 children
            if (cur.left === null && cur.right === null) {return null}
            // 若 key 沒有 left child
            if (cur.left === null) {return cur.right}
            // 若 key 沒有 right child
            if (cur.right === null) {return cur.left}

            // 若 key 有 left 與 right child
            // 將 right child 接到 left subtree 的最大值的 right child
            // 或將 left child 接到 right subtree 的最小值的 left child
            let current = cur.left
            while (current.right !== null) {
                current = current.right
            }
            current.right = cur.right
            return cur.left
        }
        return cur
    }

    return dfs(root)
}

// 用 Iteration 的方式 Time Complexity 為 O(height of the tree)

var deleteNode = function(root, key) {
    let current = root
    let parentNode = null

    while (current !== null) {
        if (key > current.val) {
            parentNode = current
            current = current.right
        } else if (key < current.val) {
            parentNode = current
            current = current.left
        } else if (key === current.val) {
            let replace = null

            if (current.left === null && current.right === null) {
                replace = null
            } else if (current.left === null) {
                replace = current.right
            } else if (current.right === null) {
                replace = current.left
            } else {
                replace = current.right

                let smallestInRight = current.right
                while (smallestInRight.left !== null) {
                    smallestInRight = smallestInRight.left
                }
                smallestInRight.left = current.left
                current.left = null
            }
            
            if (parentNode === null) {return replace}
            else {  
                if (parentNode.left === current) {parentNode.left = replace}
                else if (parentNode.right === current) {parentNode.right = replace}
                return root
            }
        }
    }
    return root
}